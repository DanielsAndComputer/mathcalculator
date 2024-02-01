const insEls = document.querySelectorAll('.ins-numbers');
const prevEl = document.getElementById('preview-el');
const answer = document.querySelector('.answer');
const resetBtn = document.querySelector('.reset');
const workings = document.getElementById('workings');
// let note = [],a,b,c;

let a = 2, b = 15, c = 8;
// fomula for solving quadratic equation
// x = -b +/- root of b^2 - 4ac divided by 2a
let check = solvEqn(a, b, c);
console.log(check)
// function that returns this calculation
function solvEqn(a,b,c) {
 // using formula
 let x = [], d,e, f;
 d = -1 * b;
 f = ((b * b) - (4 * a * c))
 e = Math.sqrt(f);
  let i = (( d + e) / (2*a));
  let j = (( d - e) / (2*a));
 x[0] =i
 x[1] =j

 return x;
// let ans = 'x = ' + x[0] + ' or X = ' + x[1];
 // showing workings
/*
 let h = `
 3x^2 - 11x - 20 = 0
 a = 3 b=-11 c=-20
 x = -b +- |b^2 - 4ac
      ---------------
      2a

      = -(-11) +- | (-11)^2 - 4(3)(-20)
      ----------------------------------
      2(3)

      = 11 +- | 121 + 240
      --------------------
      6

      = 11 +- |361
      -------------
      6

      = 11 + 19
      -----------
      6

      or

      = 11 - 19
      ----------
      6


      =5 (another function here that returns a remainder in the form 5 remainder 2 / 3 )

      or

      x= ans
`;
*/

}


/*
// geting values from user to solve the problem
insEls.forEach(function(val){
  val.addEventListener('click',function(){
switch(val.textContent) {
  case '0':
    if(note.length < 1) {
      alert("you can't start with a 0")
    }else{

      note.push(0);
    }
    
    break;
    case '1':
      if(note.length < 1) {
        alert("you can't start with a 1")
      }else{
  
        note.push(1);
      }
    break;
  case '2':
    note.push(2);
    break;
  case '3':
    note.push(3);
    break;
  case '4':
    note.push(4);
    break;
  case '5':
    note.push(5);
    break;
  case '6':
    note.push(6);
    break;
  case '7':
    note.push(7);
    break;
  case '8':
    note.push(8);
    break;
  case '9':
    note.push(9);
    break;
}
switch(val.textContent) {
  case 'x2':
    a = note;
    note = [];
    break;

  case 'x':
    b = note;
    note = [];
    break;
  case '-':

}
console.log(a)
 console.log(note)
  },false)
})

*/


