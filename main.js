const FLAGES_OBJ = require("./my_modules/getFlages.js");
const translateReq = require("./my_modules/getTranslate.js");
const input = require("./my_modules/inputStr.js");
const color = require("./my_modules/color.js");

// const StatusCodes = {
//   0: "no internet",
//   403: "error in arguments",
//   200: "all good",
//   52: "unknown error"
// }


async function main() {
  const msg = color.green("hello to my cli translater !!")
  console.log(msg);
  
  const { target , lang , text} = FLAGES_OBJ;
  if (text) 
    await translateReq({ target , lang , text});
  else 
    startConsole();

}

async function startConsole() {

  while (1) {
    console.log(color.yellow("start"));
    
    const lang = await input("\tlanguage? ");
    const target = await input("\ttarget? ");
    const text = await input("\ttext? ");
    
    await translateReq({ target , lang , text});
  } 
  
}


main();