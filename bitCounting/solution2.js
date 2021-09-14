const countBits = (n) => {
  let counter = 0;
  let num = n;
  while (num > 0) {
    if (num % 2 === 1) {
      counter++;
    }
    num = Math.floor(num / 2);
  }
  return counter;
};
