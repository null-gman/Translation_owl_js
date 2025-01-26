import "npm:colors"; //npm moudel to style string in console

import getFlages from "./my_modules/getFlages.js";
import getTranslate from "./my_modules/getTranslate.js";
import Input from "./my_modules/readline.js";

import Print from "./my_modules/prints.js";



const StatusCodes = {
  0: "no internet",
  403: "error in arguments",
  200: "all good",
  52: "unknown error"
}

  

async function mainThred() {
  Print.title();

  const obj = getFlages();
  const flagesCheck = obj.bool;
  const options = { ...obj.options }

  let res;
  if (flagesCheck) {
    // if there is flges
    res = await getTranslate(options);
    outputTranslate(res,options)
    getTextTotranslate(options)

  } else {
    res = await getInputsFromUser();
  }
}

export async function getInputsFromUser() {

  const options = new Object();
  console.log();
  options.language = await Input("language");
  options.target = await Input("target");


  getTextTotranslate(options)

}


async function getTextTotranslate(options) {

  options.text = await Input("text");

  const res = await getTranslate(options);

  outputTranslate(res,options)
  getTextTotranslate(options);

}


function outputTranslate({code,res},options) {

  if (code === "200") {
    Print.translate(res,options)
  
  }else{
    Print.error(`${StatusCodes[code]}`)
  }

}

mainThred();