/*
create a alarm clock timer, which beeps at specified times when a CLI is recieved.
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
    }
  }
 };
 delayedBeep(1); // call the function
}

//Edge Cases to test 
alarmBeep([10, 3, 5, 15, -9]); // neg integer => skip 
alarmBeep([ , ]); // no nums => no beeps 
alarmBeep(["hello"]); // NaN => skip 