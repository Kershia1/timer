/*
create a alarm clock timer, beeps at specified times 

3,5,9,10,15 seconds

test command line input: node timer1.js 10 3 5 15 9

*/

process.stdout.write('\x07'); // makes a beep sound ?!?

function alarmBeep(beeps) {
  let delay = 1000; // delay is 1 second
  for (let i = 0; i < beeps.length; i++) { // loop through the array
    if (beeps[i] > 0) { // if the element is greater than 0 @ index i
      setTimeout(() => { // set a timeout
        process.stdout.write('\x07'); //standard out beep sound,beep to console
      }, delay += beeps[i]); // delay is 1 second + the element
    } else { (beeps[i] < 0 || isNaN(beeps[i])) // 3 edge cases
      // clearInterval(intervalId); // Stop the interval don't need this
      console.log(`these are not the beeps your looking for: ${beeps}`); // print this message
    } // if the element is less than 0
    console.log('beep'); // print beep
  }
},1000);

// setInterval(() => {
//   process.stdout.write('\x07');
// });
//beep array
alarmBeep([10,"hello",, 3, 5, 15, 9]);
//Edge cases
// if no numbers are provided: no beeps 
// if an input is a negative number: ignore/skip it
// if an input is not a number: ignore/skip it