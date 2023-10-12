module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let openBrackets = [];
  let closeBrackets = [];
  let bracketsPairs = {};
  bracketsConfig.forEach((e) => {
    openBrackets.push(e[0]);
    closeBrackets.push(e[1]);
    bracketsPairs[e[1]] = e[0];
  })
  

  

  let strArr = str.split('');
  

  
  if (strArr.length%2!==0) {
    return false
  }
  strArr.forEach((e) => {

    if (!(openBrackets.includes(e) && 
      closeBrackets.includes(e))) {
        if (openBrackets.includes(e)) {
          stack.push(e);
        }
        if (closeBrackets.includes(e)) {
          if ((stack.length>0) && (stack[stack.length - 1]===bracketsPairs[e])) {
            console.log(stack[stack.length - 1], e);
            stack.pop();
          } else {
            return false
          }
        }
      }

    if (openBrackets.includes(e) && 
      closeBrackets.includes(e)) {
        if ((stack.length>0) && (stack[stack.length - 1]===bracketsPairs[e])) {
          console.log(stack[stack.length - 1], e);
          stack.pop();
          
        } else {
          stack.push(e);
        }
      }


  })
  console.log(stack)
  if (stack.length>0) {
    return false
  }

  return true

}
