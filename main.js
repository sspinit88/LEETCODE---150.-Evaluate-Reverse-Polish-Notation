/*
150. Evaluate Reverse Polish Notation

You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

Note that:

    The valid operators are '+', '-', '*', and '/'.
    Each operand may be an integer or another expression.
    The division between two integers always truncates toward zero.
    There will not be any division by zero.
    The input represents a valid arithmetic expression in a reverse polish notation.
    The answer and all the intermediate calculations can be represented in a 32-bit integer.

 

Example 1:

Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9

Example 2:

Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6

Example 3:

Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22


Ваша задача - вычислить арифметическое выражение, представленное в обратной польской записи.

Вот шаги, которые мы будем следовать:

1. Инициализируйте стек для хранения чисел.
2. Пройдите по каждому токену в массиве токенов. Если токен является числом, добавьте его в стек. Если токен является оператором, вычислите выражение с двумя верхними числами в стеке и оператором, затем добавьте результат обратно в стек.
3. После прохождения всех токенов в массиве токенов, верните верхнее число в стеке.

Your task is to evaluate an arithmetic expression represented in a Reverse Polish Notation.

Here are the steps we will follow:

1. Initialize a stack to store the numbers.
2. Go through each token in the array of tokens. If the token is a number, push it into the stack. If the token is an operator, calculate the expression with the top two numbers in the stack and the operator, then push the result back into the stack.
3. After going through all tokens in the array of tokens, return the top number in the stack.

*/

function evalRPN(tokens) {
  // Инициализируем стек для хранения чисел
  // Initialize a stack to store the numbers
  let stack = [];

  // Проходим по каждому токену в массиве токенов
  // Go through each token in the array of tokens
  for (let token of tokens) {
    // Если токен является оператором
    // If the token is an operator
    if (token === '+' || token === '-' || token === '*' || token === '/') {
      // Вычисляем выражение с двумя верхними числами в стеке и оператором
      // Calculate the expression with the top two numbers in the stack and the operator
      let num2 = stack.pop();
      let num1 = stack.pop();
      let result = 0;
      switch (token) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result =
            num1 / num2 > 0 ? Math.floor(num1 / num2) : Math.ceil(num1 / num2);
          break;
      }
      // Добавляем результат обратно в стек
      // Push the result back into the stack
      stack.push(result);
    } else {
      // Если токен является числом, добавляем его в стек
      // If the token is a number, push it into the stack
      stack.push(Number(token));
    }
  }

  // Возвращаем верхнее число в стеке
  // Return the top number in the stack
  return stack.pop();
}
