const color = require("./color");
const {fetch} = require("undici");


/* 
as a refrence :

    const StatusCodes = {
      0: "no internet",
      403: "error in arguments",
      200: "all good",
      52: "unknown error"
    }  
*/
async function translateReq({ target , lang, text }) {

  if (!text)  text = "hello world";
  if (!lang)  lang = "en";
  if (!target)  target = "ar";
  
  
  const res = await handelReq({ target , lang, text });

  
  printTrans({ target , lang, text } , res);
  

}

function handelReq({ target , lang, text }) {
  return new Promise(async (resolve, _) => {
    text = text.replace(" ", "%20"); /* formating white spaces */
    const apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${lang}|${target}`;
    console.log("\n",color.yellow("> loading..."),"\n");
        
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
      resolve(data); return;
    } else if (res.responseStatus == "200") {
      data.code = "200";
      data.res = { translate: res.responseData.translatedText, text };
      resolve(data); return;
    }
    data.code = "52";
    resolve(data);
    return;
  })
}


function printTrans({ target , lang, text }, res) {
  
    if (res.code === "0" ) 
        return console.log(color.red(">> no internet"));
    else if (res.code === "403" )
        return console.log(color.red(">> error in arguments"));
    else if(res.code === "52" )  
        return console.log(color.red(">> unknown error"));


    /* translation 
            from "" to ""
            hello
            مرحبا 
     * 
     *  */    
    console.log(color.green("translation"),`from "${lang}" to "${target}"`);
    console.log(text , "\n", res.res.translate);
    

    console.log("-----------------------------------------------------------------");
    
      
}

module.exports =  translateReq;


