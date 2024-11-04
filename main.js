import "npm:colors"; //npm moudel to style string in console

import getFlages from "./getFlages.js";
import getTrans from "./translate.js";
import { printTranslate, printTips } from "./prints.js"


// console.log(process.argv);

async function MainTherd() {
  console.log("--Welcom to owe translater".bold);
  const options = getFlages();
  printTips(options)
  console.time("loading");
  
  let data;
  try {
    data = await getTrans(options);
  } catch (error) {
    console.log();
    // console.log(error);
    console.log("------------------ ERROR ------------------".red);
    console.log("> " + "no internet".red);
    process.exit();
  }

  console.timeEnd("loading");
  console.log();
  printTranslate(data)
  process.exit();
}


MainTherd();

