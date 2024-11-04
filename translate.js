


const api_trans = " ";


async function getTrans(options) {
  const text = options.text.replace(" ", "%20")


  const apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${options.currunt}|${options.target}`;
  console.log("loading...");

  let data = await fetch(apiUrl).then((v) => v.json());
  data = { trans: data.responseData.translatedText, text: options.text }
  return data;

}



export default getTrans;


