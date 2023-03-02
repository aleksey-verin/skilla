const fetchAudio = async (record, partnership_id) => {
  const _url = new URL('https://api.skilla.ru/mango/getRecord')

  if (record || partnership_id) {
    _url.searchParams.append('record', record)
    _url.searchParams.append('partnership_id', partnership_id)
  }

  const _token = 'testtoken'

  const headersList = {
    'Content-Type': 'audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3',
    'Content-Transfer-Encoding': 'binary',
    'Content-Disposition': 'filename="record.mp3"',
    Authorization: `Bearer ${_token}`,
    Accept: '*/*',
    'Access-Control-Allow-Credentials': 'true',
  }

  const proxy = 'https://cors-anywhere.herokuapp.com/'
  const url = `${proxy}${_url}`

  const response = await fetch(url, { method: 'POST', headers: headersList })
  const audioBlob = await response.blob()
  return URL.createObjectURL(audioBlob)
}
export default fetchAudio
