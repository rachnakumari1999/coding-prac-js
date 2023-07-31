// var StudentDetails={
//     StudentName:['Rachna','Tanya'],
//     StudentSubject:['Maths','English']

// }

// var a="Rachna";
// const b="kumari";
//  b="Srivastava";
// console.log(a+b);

// const arrs=["saab","cat",1,{"key":2}];
// arrs[3]="boy";
// arrs.push({"name":"tanya"})
// console.log(arrs)



// var p1=3;
// str="";
// function product(p1)
// {   
//     for(i=1;i<p1;i++){
//         console.log(str+="*")
//     }
    
// }
// product(p1)

// // const person={
// //     name:"Rachna",
// //     Rollno:"101"

// // }
// // console.log(person.Rollno);


// function addition()
// {    
//     var a=5;
//     var b=6;
//     result=a+b;
//     document.getElementById("demo").innerHTML=result;
// }

// let text="rachna"
// function Wordslength(text){
//     document.getElementById("demo").innerHTML=text.length
// }

// Wordslength(text)

// s=5;
// if(s===" "){
//     console.log("empty")
// }
// else if(s%2==0){
//     console.log("even")
// }
// else{
//     console.log("odd")
// }

// var d=4;
// function print(d){
   
//     f=d
//     console.log(f)
// }
// h=print(d)
// console.log("call " + h)


// const Siblings=new Map(
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
// );

// document.getElementById("demo").innerHTML = Siblings.get("apple");


/*find() returns the value of the first element
 in an array that passes a test (provided by a function):*/
const age=[30,40,50,60];
document.getElementById("dem").innerHTML = age.find(checkbox);

  
  function checkbox(age){
      return age>18
  }


/* filter return all value according to condition*/
const marks=[30,40,50,60];
document.getElementById("demo").innerHTML = marks.filter(checkbox);

  
  function checkbox(marks){
      return marks>18
  }


/*forEach() method call a function for each element in an array */


const arr=[10,20,304];
arr.forEach((num) =>
 {
  console.log(num*3);
  });

//Array.Map()

let ar=[10,20,30]
let modifiedarray=ar.map(function(ele){
        return ele*3
    });
console.log(modifiedarray)


let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "capacity": 5
    }
  
  ]
  const myArr=Array.from(cars)
  myArr.forEach((df) =>
  {
    console.log(df.color)
})





const a=[20,30,45,66]
a.forEach((ele) =>{
    if(ele%2==0){
        console.log(ele)
    }
})


const price=[10,20,34,33]
const taxprice=price.map(x=>x *3)
console.log(taxprice)


const array2 = [1, 0, 8, 0, 14, 0, 2, 0, 1];
let len = array2.length;
 let c=0;
array2.forEach((item) =>{
    if(item!=0){
        array2[c++]=item
    }
})
while(c<len){
    array2[c++]=0
}
console.log(array2)


//Find the minimum element in an array.
const r=[3,4,2,7,1,90]
min=arr[0]
d=r.length
for(i=0;i<d;i++){
  if(r[i]<min){
    min=r[i]
  }
}
console.log(min)


//using bubble sort largest largest number
const buble=[34,56,34,67,1,96]

var temp
x=buble.length
for(i=0;i<x-1;i++){
  for(j=0;j<x-i-1;j++){
    if(buble[j]<buble[j+1]){
        temp=buble[j]
        buble[j]=buble[j+1]
        buble[j+1]=temp
    }
  }
}

console.log([...new Set(buble)][1])


// Find the sum of all elements in an array.
const addele=[30,36,33]
s=0
for(i=0;i<addele.length;i++){
  s=s+addele[i]
}
console.log(s)



















