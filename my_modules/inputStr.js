const readline = require("node:readline");
const  color =  require("./color.js");

/* for  readline.createInterface( <object> )*/
const STD = {
  input: process.stdin,
  output: process.stdout
};




function inputStr(msg) {
  const rl = readline.createInterface(STD);
  const promt = (str = msg) => sendPrompt(rl, str);

  return new Promise((resolve , _) => {

    promt();
    rl.on("line", function (v) {
      v = v.trim();
      if(v === ".exit"){
        rl.close()
        EndProgram();
        return;
      }
      resolve(v); 
      rl.close(); 

    })
  })

}

function sendPrompt(rdObj, msg) {
  rdObj.setPrompt(`${msg}`)
  rdObj.prompt()
}



function EndProgram() {
  const rl = readline.createInterface(STD);
  rl.write(color.yellow("\n> press enter to exit ..."));
  rl.on("line", _ => {
    rl.close()
    return;
  })
}


module.exports =  inputStr;

