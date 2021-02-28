let a=1
console.log(a)
console.log("hello world")

//****************loops****************

//-----------for lo
// for(i=1;i<=5;i++){
//     console.log(i*5);
// }

let j=1
while(j<=5){
    console.log(j*5)
    j++
}
//

function mul(x){
    return x*2;
}
console.log(mul(3))

function ap(a,n,d){
    return a+(n-1)*d;
}
console.log(ap(5,3,2))

//function expresnion

let b=function(){
    console.log("hie")
}
console.log(b)
//iifi
let c=(function(x,y,z){

    console.log("iifi")
    return x*y*x;
})(5,6,7);

//array
let arr=[]
arr[0]=1
arr[1]=2
arr[2]=3
arr[3]="hiell"
arr[5]=6
arr[6]=['a','b']
arr[7]=b
console.log(arr)
//array slice function
console.log(arr.slice(1,4))

//String
let str1="asjdsal asldnsaklm klsnd;"
let str2="sakcsasaldnsnskd"
console.log(str1)
console.log(str2.length)

let str3="a b c d"
//String method split() will convert string into array
//we have to specify value where to split elements in string to store it in array
console.log(str3.split(" "))
let str4="a+b+v+d"
console.log(str4.split("+"))

//join function used to convert sarray to string
let arr1=["hi","this","is","a","String"]
console.log(arr1.join(" "))
console.log(arr1.join("+"))


//pop function will rempve last element of array just like stac
console.log(arr1.pop())

//push function will add element from last index of array
console.log(arr1.push("hello"))//push will return length of array 
console.log(arr1)

//shift method will remove first element of array
console.log(arr1.shift())
console.log(arr1)


//unshift method will add valuen at first index of array
console.log(arr1.unshift())//unshift will return lngth of array
console.log(arr1)


//concatination of string using +
let x1=10
let str5="thi is x="+x1
console.log(str5)



//Template string 
//it is used to create string as template so that updation and variable insertion will be easier
let x2=20
//using ${variableName} 
let str6=`sjndasjns skmdksam
sakkdmskdmk this is ${x2}
sadmsds`
console.log(str6)