console.log("<------ QUESTION ONE ------>")
function writeDing() {
  console.log('Ding!');
}

let timerId = setTimeout(writeDing, 3000);

console.log(timerId);

console.log("<------ QUESTION TWO ------>")

const words = ['short', 'medium', 'delicious', 'nice', 'lengthy'];

const longWords = words.filter((word) => word.length >= 7);

console.log(words)

const shortLong = (a, b) => {
  return a.length - b.length
}

console.log(words.sort(shortLong))

console.log("<------ QUESTION TWO EXPLAINED ------>")

// What's going on with the sort function? Let's find out.
const numbers = [5, 3, 1, 2, 4]

function compareNumbersShow(a, b){
  console.log(`a is equal to ${a}`)
  console.log(`b is equal to ${b}`)
  console.log(`${a} minus ${b} is equal to ${a - b}`)
  return a - b
}

console.log(numbers.sort(compareNumbersShow))


console.log("<------ QUESTION THREE ------>")

// 1 line arrow function (w/ implicit return)
const longWordsArrow = words.filter((word) => word.length >= 7);
// function callback
const longwords = words.filter(function(word) {
  return word.length >= 7
})

console.log(longwords)

const colors = ['red', 'green', 'blue', 'purple'];

const forEach = (array, callback) => {
  for (let i = 0; i < array.length; i++){
    callback(array[i], i)
  }
}

function log(element, index) {
  console.log(`Index: ${index} / Element Value: ${element}`);
}

console.log(forEach(colors, log))

console.log(colors.forEach(log))


function step1(cb) {
  setTimeout(function() {
    console.log('STEP 1 COMPLETE');
    cb()
  }, 750);
}

function step2(cb) {
  setTimeout(function() {
    console.log('STEP 2 COMPLETE');
    cb()
  }, 500);
}
	
function step3(cb) {
  setTimeout(function() {
    console.log('STEP 3 COMPLETE');
    cb()
  }, 250);
}
// w/ arrow functions
step1(() => {
  step2(() => {
    step3(() => {
      console.log("FINISHED");
    })
  })
});

// w/o arrow functions
step1(function() {
  step2(function() {
    step3(function() {
      console.log("FINISHED");
    })
  })
});

console.log("<------ BONUS QUESTION ------>")


const countdown = (seconds) => {
  let timer = setInterval(() => {
    console.log("Count:" + seconds)
    if(seconds <= 1){
      clearInterval(timer)
    } else {
      seconds--
    }
  }, 1000)
}