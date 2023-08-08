/*
create a alarm clock timer, beeps at specified times 

3,5,9,10,15 seconds

test command line input: node timer1.js 10 3 5 15 9

*/

process.stdout.write('\x07'); // makes a beep sound ?!?

function alarmBeep(beeps) {
  const delayedBeep = delay => {// delay is 1 second
  for (let i = 0; i < beeps.length; i++) { // loop through the array
    if (beeps[i] > 0) { // if the element is greater than 0 @ index i
      setTimeout(() => { // set a timeout
        process.stdout.write('\x07'); //standard out beep sound,beep to console
      }, delay * 1000); // delay is 1 second * the second amount
      delay += beeps[i]; // increment 
    } else if (beeps[i] < 0 || isNaN(beeps[i])) { // 3 edge cases
      console.log(`these are not the beeps your looking for: ${beeps}`); 
    } // if the element is less than 0
  }
 };
 delayedBeep(1); // call the function
}

// setInterval(() => {
//   process.stdout.write('\x07');
// });
//beep array
alarmBeep([10,"hello",, 3, 5, 15, 9]);
//Edge cases
// if no numbers are provided: no beeps 
// if an input is a negative number: ignore/skip it
// if an input is not a number: ignore/skip it