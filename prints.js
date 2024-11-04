export function printTranslate({ trans, text }) {
  // console.log(data);
  console.log("from :".bold.yellow + ` ${text}`);
  console.log("----------------- TRANSLATE -----------------");
  console.log("to : ".bold.green + `${trans}`);
}


export function printTips({ currunt, target }) {
  console.log("> " + "type -h as a flage to help".gray);
  console.log("> " + `${currunt}`.yellow.bold + " -> " + `${target}`.yellow.bold);
  console.log();
}


// module.export = {printTrans,printTips};