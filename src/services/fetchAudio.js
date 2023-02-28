const fetchAudio = async (record, partnership_id) => {
  console.log('fetch', record, partnership_id)
  let _url = new URL('https://api.skilla.ru/mango/getRecord')

  if (record || partnership_id) {
    _url.searchParams.append('record', record)
    _url.searchParams.append('partnership_id', partnership_id)
  }

  // const _token = 'testtoken'
  // const audio = new AudioContext()
  // console.log(_url.href)

  const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://api.skilla.ru/mango/getRecord?record=MToxMDA2NzYxNToxNDMwMDM3NzExNzow&partnership_id=578");
xhr.setRequestHeader("Accept", "*/*");
xhr.setRequestHeader("Content-Type", "audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3");
xhr.setRequestHeader("Content-Transfer-Encoding", "binary");
xhr.setRequestHeader("Content-Disposition", "filename=\"record.mp3\"");
xhr.setRequestHeader("Authorization", "Bearer testtoken");
xhr.setRequestHeader("Access-Control-Allow-Credentials", "true");

xhr.send(data);

  // const headersList = `
  // "Content-Type": "audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3",
  // "Content-Transfer-Encoding": "binary",
  // "Content-Disposition": "filename="record.mp3"",
  // "Authorization": "Bearer testtoken"
  // `
  // const headersList = {
  //   'Content-Type': 'audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3',
  //   'Content-Transfer-Encoding': 'binary',
  //   'Content-Disposition': 'filename="record.mp3"',
  //   'Authorization': 'Bearer testtoken',
  //   'Accept': '*/*',
  //   'Access-Control-Allow-Credentials': 'true'
  // }

  // const response = await fetch(
  //   'https://api.skilla.ru/mango/getRecord?record=MToxMDA2NzYxNToxNDMwMDM3NzExNzow&partnership_id=578',
  //   {
  //     method: 'POST',
  //     headers: headersList,
  //   }
  // )

  // const audioBlob = await response.blob()

  // return URL.createObjectURL(audioBlob)

  //  let response = await fetch("https://api.skilla.ru/mango/getRecord?record=MToxMDA2NzYxNToxNDMwMDM3NzExNzow&partnership_id=578", {
  //    method: "POST",
  //    headers: headersList
  //  });

  //  let data = await response.text();
  //  console.log(data);
}
export default fetchAudio

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
