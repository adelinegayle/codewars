const persistence = (num) => {
  for (var i = 0; num > 9; i++) {
    num = `${num}`.split("").reduce((a, b) => a * b);
  }
  return i;
};
