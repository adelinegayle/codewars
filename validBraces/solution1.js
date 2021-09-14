const validBraces = (braces) => {
  const validBraces = [];
  let res = true;
  [...braces].map((cur) => {
    if (cur === "(" || cur === "{" || cur === "[") {
      validBraces.push(cur);
    } else {
      const pop = validBraces.pop();
      if (cur === ")" && pop !== "(") {
        res = false;
      } else if (cur === "}" && pop !== "{") {
        res = false;
      } else if (cur === "]" && pop !== "[") {
        res = false;
      }
    }
  });
  if (validBraces.length > 0) {
    res = false;
  }
  return res;
};
