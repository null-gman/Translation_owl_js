function getTranslate({ target, language, text }) {


  return new Promise(async (resolve, reject) => {
    // no need to reject

    const _text = text.replace(" ", "%20")

    const apiUrl = `https://api.mymemory.translated.net/get?q=${_text}&langpair=${language}|${target}`;
    
    console.log();
    console.log("> loading...".italic.yellow);
    console.log();
    

    let data = new Object();
    let res;
    try {
      res = await fetch(apiUrl).then((v) => v.json());

    } catch (error) {

      data.code = 0;
      resolve(data);
      return;
    }

    if (res.responseStatus == "403") {
      data.code = "403";
      resolve(data);
      return;
    } else if (res.responseStatus == "200") {
      data.code = "200";
      data.res = { translate: res.responseData.translatedText, text };
      resolve(data);
      return;

    }

    data.code = "52";
    resolve(data);
    return;


  })



}

// function getTranslate({ target, lang, text }) {
//   new Promise((resolve, reject) => {
//     resolve ("hello word")
//   })

// }


export default getTranslate;


