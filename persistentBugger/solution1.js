const persistence = (n) => {
  let counter = 0;
  let str = n + "";
  let numArr = str.split("").map((n) => parseInt(n));
  while (numArr.length > 1) {
    const newN = numArr.reduce((n1, n2) => n1 * n2);
    counter++;
    str = newN + "";
    numArr = str.split("").map((n) => parseInt(n));
  }

  return counter;
};
