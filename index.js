function checkFibonacci(n) {
  let fib = [0, 1];
  let i = 2;
  while (fib[i - 1] < n) {
      fib[i] = fib[i - 1] + fib[i - 2];
      i++;
  }
  if (fib.includes(n)) {
      return `O número ${n} pertence à sequência de Fibonacci.`;
  } else {
      return `O número ${n} não pertence à sequência de Fibonacci.`;
  }
}

console.log("\n Verificar se um número pertence à sequência de Fibonacci: \n");
console.log(checkFibonacci(9));

function invertString(str) {
  let InvertedString = '';
  for (let i = str.length - 1; i >= 0; i--) {
      InvertedString += str[i];
  }
  return InvertedString;
}

console.log("\n Inverter uma string: \n");
console.log(invertString("Hello World!"));
