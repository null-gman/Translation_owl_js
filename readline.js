import readline from "node:readline";
import Print from "./prints.js";
import { openInterface } from "./main.js";

const P = {
  input: process.stdin,
  output: process.stdout
};

export async function Input(text) {
  const rl = readline.createInterface(P);
  const promt = (str = text) => sendPrompt(rl, str);

  return new Promise((resolve) => {
    // no reject will needed .
    promt()
    rl.on("line", function (v) {
      v = v.trim();
      if (v === ".exit") {
        rl.close();
        EndProgram();

        return;
      }

      if (v === ".help") {
        Print.help()
        promt()
        return;
      }

      if (v === ".start") {
        rl.close();
        openInterface();
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





export default Input;