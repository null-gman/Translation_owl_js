function getFlages() {
  const arrOfFlages = [...process.argv]
  // defaults
  const options = {
    target: "ar",
    currunt: "en",
    text: "hello word"
  }

  for (let ele in arrOfFlages) {
    ele = Number(ele);
    if (arrOfFlages[ele] == "-h") {
      logHelp()
      process.exit()
    }
    sw: switch (arrOfFlages[ele].toLocaleLowerCase()) {
      case "-t":
        options.target = arrOfFlages[ele + 1] || "en";
        break sw;
      case "-l":
        options.currunt = arrOfFlages[ele + 1] || "ar";
        break sw;
      case "-c":
        options.text = getContant(ele, [...arrOfFlages]) || "hello word";
        break sw;
      default:
        break sw;
    }

  }

  return options;
}






function getContant(index, arr) {
  let res = "";

  // to start from first elemnt after flage
  index++;

  for (let i = index; i < arr.length; i++) {
    if (arr[i][0] !== "-") {
      res += i < arr.length - 1 ? `${arr[i]} ` : `${arr[i]}`;
    } else {
      break;
    }

  }

  return res;
}






function logHelp() {
  
  console.log();
  console.log("# use flages to set options".green.bold);
  console.log("> "+"-t <lang>\tto set the target lang you want translate to".gray);
  console.log("> "+"-l <lang>\tto set the lang you will write".gray);
  console.log("> "+"-c <text>\tthe text you want translate".gray);
  console.log("> "+"-h <NOTHING>\thelp".gray);

}


export default getFlages;