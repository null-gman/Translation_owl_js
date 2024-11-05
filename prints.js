const Print = new Object();


Print.title = () => {
  console.log();
  
  console.log("WELLCOM to OWETRANS".bold);
  console.log("-------------------".bold);
  Print.tips();
}

Print.tips = () => {
  console.log("> "+`type '.help' to get help`.gray);
  console.log("> "+`type '.start' To start from the beginning`.gray);
}

Print.help = ()=>{
  console.log("---------------------------------- HELP -------------------------------------".bgGreen);
  
  console.log("> "+`you can use flages befor run the program :`.yellow);
  console.log("  "+`-h <nothing>\tfor help`.gray);
  console.log("  "+`-l <language>\tto set lang you will type`.gray);
  console.log("  "+`-t <language>\tto set target lang you want translate to`.gray);
  console.log("  "+`-c <text>\tto type the contanet you want yo translate`.gray);
  console.log();
    
  console.log("> "+`or you type it in cli interface :`.yellow);
  console.log("  "+`language  :\tto set lang you will type`.gray);
  console.log("  "+`targen:\tto set target lang you want translate to`.gray);
  console.log("  "+`text  :\tto type the contanet you want yo translate`.gray);
  console.log();

  console.log("> "+`type '.help' to get help`.yellow);
  console.log("> "+`type '.start' To start from the beginning`.yellow);

  console.log("> "+`defalts : lang = 'en' , target = 'ar', text = 'hello word'`.yellow);
  console.log("> "+`you can use one flage or as many as you want`.yellow);

  console.log("---------------------------------- HELP END -------------------------------------".bgGreen);
  console.log();
  
  
} 


Print.warn = (messege)=>{
  console.log(" > "+`${messege}`.yellow);
} 
 Print.error = (messege)=>{
  console.log(" > "+`${messege}`.red);
 }

Print.translate  = ({translate,text},{language,target}) => {
  console.log(language +" -> "+ target);
  console.log();
  
  console.log("from : "+`${text}`);
  console.log(("to : "+`${translate}`.green));
}

export default Print;