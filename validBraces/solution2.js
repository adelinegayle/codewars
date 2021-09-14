const braceMap = { "(": ")", "{": "}", "[": "]" };

const validBraces = (braces) => {
  const stack = [];
  for (const char of [...braces]) {
    if (braceMap[char]) {
      stack.push(braceMap[char]);
    } else {
      if (char !== stack.pop()) {
        return false;
      }
    }
  }
  return stack.length > 0 ? false : true;
};
