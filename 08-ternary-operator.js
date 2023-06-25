const sth = (value) => (value < 18 ? `Nightclub is 18+ only` : true);

function checkSth(value) {
  if (value < 18) {
    return `Nightclub is 18+ only`;
  } else {
    return true;
  }
}

function checkSth(value) {
  return value < 18 ? `Nightclub is 18+ only` : true;
}
