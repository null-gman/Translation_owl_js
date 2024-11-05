import "npm:colors"; //npm moudel to style string in console

import getFlages from "./getFlages.js";
import getTranslate from "./getTranslate.js";
import Input from "./readline.js";

import Print from "./prints.js";



const Codes = {
  0: "no internet",
  403: "error in prams",
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
    res = await openInterface();
  }
}

export async function openInterface() {

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
    Print.error(`${Codes[code]}`)
  }

}

mainThred();