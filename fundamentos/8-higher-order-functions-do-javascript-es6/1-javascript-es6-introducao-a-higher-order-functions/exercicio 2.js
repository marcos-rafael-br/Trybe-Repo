const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor(Math.random() * 5 + 1);
  return callback(myNumber, number)
    ? 'Parabéns você ganhou'
    : 'Tente novamente';
};

console.log(lotteryResult(4, numberChecker));
  