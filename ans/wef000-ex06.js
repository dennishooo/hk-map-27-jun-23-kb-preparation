function checkMarkSix(ans, guesses) {
  for (let guess of guesses) {
    if (!ans.includes(guess)) return false;
  }
  return true;
}

function quickPicks(ans, guessTimes) {
  let result = [];
  for (let i = 0; i < guessTimes; i++) {
    let bid = [];
    while (bid.length < 2) {
      let guesses = new Set();
      let guess = Math.floor(Math.random() * 10);
      console.log({ guess, guesses });
      if (guesses.has(guess)) continue;
      guesses.add(guess);
      bid.push(guess);
    }
    result.push({ bid, win: checkMarkSix(ans, bid) });
  }
  return result;
}

// console.log(checkMarkSix([1, 2, 3], [1, 2]));
// console.log(checkMarkSix([1, 2, 3], [6, 2]));

quickPicks([1, 2, 3], 10).forEach((pick, idx) => {
  setTimeout(() => {
    console.log(`Your quick pick ${pick.bid}`);
    console.log(pick.win.toString().toUpperCase());
  }, idx * 1000);
});
