const fetchRequest = async (
  start = '',
  end = '',
  offset = 0,
  search = '',
  in_out = '',
  from_type = '',
  person_id = '',
  sources = '',
  errors = ''
) => {
  console.log(person_id)
  let _url = new URL('https://api.skilla.ru/mango/getList')

  if (start || end) {
    _url.searchParams.append('date_start', start)
    _url.searchParams.append('date_end', end)
  }
  if (offset) {
    _url.searchParams.append('offset', offset)
  }
  if (search) {
    _url.searchParams.append('search', search)
  }
  if (in_out) {
    _url.searchParams.append('in_out', in_out)
  }
  if (from_type) {
    _url.searchParams.append('from_type[] ', from_type)
  }
  if (person_id) {
    _url.searchParams.append('from_persons[]', person_id)
  }
  if (sources) {
    _url.searchParams.append('sources[]', sources)
  }
  if (errors) {
    _url.searchParams.append('errors[]', errors)
  }

  const _token = 'testtoken'

  console.log(_url.href)

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

// console.log(start, end)
// const _apiBase = 'https://api.skilla.ru/mango/getList'
// const _token = 'testtoken'
// const _params = {
//   date_start: start,
//   date_end: end,
//   offset: offset,
//   // search: search,
// }
// let _url = _apiBase
// if (start && end) {
//   _url = `${_apiBase}?date_start=${_params.date_start}&date_end=${_params.date_end}&offset=${_params.offset}`
// }
