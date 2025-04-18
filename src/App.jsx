import './App.css'

//This is a comment for the page.
/*This is a 
multiple line 
comment 
*/
function App() {
  
  //let a = "Lexus";
  //let list = ["mercedes", "honda"];

  //console.log (list, a)

  //data types 

  let a = "2";
  let b = "3";

  console.log( a + b);

  let c = true;

  if(c === true){
    console.log(a+b);
  }

  //addition
  let sum = 65 + 476;
  console.log(sum);

  //subtraction
let difference = 89 - 4;
console.log (difference);

//multiplication
let multiplication = 34 * 12;
console.log ("multiplication result is" + multiplication);

//division
let answer = 81 / 9;
console.log( "division  is" + answer);

//remainder
let remainder =  25 % 4;
console.log("remainder value is" + remainder);

//regular function

function additions (){
  let d = 5;
  let e = 20;
  console.log (d + e);
}
additions();

function subtractions (){
  let d = 30;
  let e = 20;
  console.log (d - e);
}
subtractions();

//Arrow function

const subtractionfxn = () => {
  let first = 29;
  let second = 7;
  let difference = first -second;
  console.log("The result of subtractionfxn is" + difference);
}
subtractionfxn();

//dot length property

let value = "Ipinyomi";
console.log("the length of Ipinyomi is" + value.length);

let newArray = [2, 4, 6, "first", "third"];
console.log(newArray.length);

// string methods
let name = "hot cross buns";
console.log(name.toUpperCase());

let big = "MICHAEL";
let result = big.toLowerCase();
console.log(result);

//array method called split
let sentence = " This is me!";
console.log(sentence.split(" "));





  return (
    <>
      <div>
       This is a new Vite project
      </div>
      
    </>
  )
}

export default App
