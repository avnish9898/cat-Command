#!/usr/bin/env node

//fs(file system) is a   module that allows you to work with the file system on your computer.

let fs=require('fs');



/*process.argv is an array which inludes file path name of node js and our js file path
process.argv als onclude the data we write on console*/
(function(){
let cmd=process.argv.slice(2);//slice is used to ignore the file paths
let option=[];
let files=[];
let str=``;
for(i=0;i<cmd.length;i++){
//startsWith() is used to check if given string starts with particular element or not,it return boolean vaue
    if(cmd[i].startsWith("-")){
        option.push(cmd[i]);
    }
    else{
        files.push(cmd[i]);
    }
}
for(j=0;j<files.length;j++){
    //fs.existSync is basically used to check if file exist or not,it returns boolean value
    if(fs.existsSync(files[j])){ 
        str+=fs.readFileSync(files[j]).toString();
    }
    
    else{
        console.log("invalid file");
        return;
    }
}

//converting string to array
str=str.split("\n")

if(option.includes("-s")){
    str=removeEmptySpaces(str);
}
if (option.includes("-n") && option.includes("-b")) {
    if (option.indexOf("-n") > option.indexOf("-b")) {
      //use -b
      str = addNonEmptyNum(str);
    } else {
      //use -n
     str = addAllNum(str);
    }
  } else {
    //either one is present or none is present
    if (option.includes("-n")) {
      //use -n
      str = addAllNum(str);
    }
    
    if (option.includes("-b")) {
      //use -b
      str = addNonEmptyNum(str);
    }
  }
//convert array to string
str=str.join("\n")

console.log(str);

})();

function removeEmptySpaces(arr) {
    let y = [];
  
    let flag = false;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "" || arr[i] == "\r") {
        if (flag === true) {
          continue;
        } else {
          y.push(arr[i]);
          flag = true;
        }
      } else {
        y.push(arr[i]);
        flag = false;
      }
    }
  
    return y;
  }

//b
function addNonEmptyNum(arr) {
    let lineNumber = 1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== "" && arr[i] !== "\r") {
        arr[i] = lineNumber + " " + arr[i];
        lineNumber++;
      }
    }
    return arr;
  }
  //n
  function addAllNum(arr) {
    for (let i = 1; i <= arr.length; i++) {
      arr[i - 1] = i + " " + arr[i - 1];
    }
    return arr;
  }
  