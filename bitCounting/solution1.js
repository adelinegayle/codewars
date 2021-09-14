const raiseToTwo = (num) => num * 2;

const countBits = (n) => {
  const bitArray = [];

  let bit = 1;
  bitArray.push(bit);

  while (bit < n && bit * 2 <= n) {
    bit = raiseToTwo(bit);
    bitArray.push(bit);
  }

  bitArray.reverse();

  let check = 0;
  let bitCounter = 0;
  bitArray.map((b, index) => {
    if (check + b <= n) {
      check = check + b;
      bitCounter++;
    }
    if (check === n) {
      return;
    }
  });
  return bitCounter;
};
