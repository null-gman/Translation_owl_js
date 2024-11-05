import Print from "./prints.js";

function getFlages() {
  const arrOfFlages = [...process.argv]

  const options = {
    target: "ar",
    language: "en",
    text: "hello word"
  }

  let bool = false;

  for (let ele in arrOfFlages) {
    ele = Number(ele);
    if (arrOfFlages[ele] == "-h") {
      Print.help();
    }
    sw: switch (arrOfFlages[ele].toLocaleLowerCase()) {
      case "-t":
        options.target = arrOfFlages[ele + 1] || "ar";
        bool = true;
        break sw;
      case "-l":
        options.language = arrOfFlages[ele + 1] || "en";
        bool = true;
        break sw;
      case "-c":
        options.text = getContant(ele, [...arrOfFlages]) || "hello word";
        bool = true;
        break sw;
    }
  }
  const obj = { options, bool }
  return obj;
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


export default getFlages;