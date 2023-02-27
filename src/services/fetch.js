const fetchRequest = async (start, end, offset = 0) => {
  console.log(start, end)
  const _apiBase = 'https://api.skilla.ru/mango/getList'
  const _token = 'testtoken'
  const _params = {
    date_start: start,
    date_end: end,
    offset: offset,
  }
  let _url = _apiBase
  if (start && end) {
    _url = `${_apiBase}?date_start=${_params.date_start}&date_end=${_params.date_end}&offset=${_params.offset}`
  }

  console.log(_url)

  const headersList = {
    Accept: '*/*',
    Authorization: `Bearer ${_token}`,
  }

  try {
    const response = await fetch(_url, {
      method: 'POST',
      headers: headersList,
    })
    if (response.ok) {
      return await response.json()
    } else {
      console.log('err')
      throw new Error('some err')
    }
  } catch (error) {
    console.log('other err')
  }
}

export default fetchRequest
