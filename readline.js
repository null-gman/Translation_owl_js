import readline from "node:readline";
import Print from "./prints.js";
import { openInterface } from "./main.js";

const P = {
  input: process.stdin,
  output: process.stdout
};

const Ex = new Object()
Ex.help = (rlObj, promt) => {
  Print.help();
  promt()
}
Ex.exit = (rlObj) => {
  rlObj.close();
  EndProgram();
}
Ex.start = (rlObj) => {
  rlObj.close();
  openInterface();
}
async function Input(text) {
  const rl = readline.createInterface(P);
  const promt = (str = text) => sendPrompt(rl, str);

  return new Promise((resolve) => {
    // no reject will needed .

    promt()
    rl.on("line", function (v) {
      v = v.trim();

      if (v[0] === ".") {
        let ex = geteEx(v)
        if (Ex[ex]) {
          Ex[ex](rl, promt);
    
        }
        else {
          console.log("no ex");
          promt()
        }
        return;
      }

      if (v) {
        resolve(v);
        rl.close();
        return;
      } else {
        Print.warn(`type in ${text}`)
        promt()
      }
    })
  })

}



function sendPrompt(rdObj, text) {
  rdObj.setPrompt(`${text}: `.bold)
  rdObj.prompt()
}



function EndProgram() {
  const rl = readline.createInterface(P);
  rl.write("\n> press enter to exit ...".yellow)
  rl.on("line", function (v) {
    rl.close()
    return;
  })
}


function geteEx(str) {
  let res = ""
  for (let i = 1; i < str.length; i++) {
    res += str[i]
  }
  return res;
}



export default Input;

