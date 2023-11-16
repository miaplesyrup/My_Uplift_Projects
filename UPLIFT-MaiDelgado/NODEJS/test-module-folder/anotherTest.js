const { add, subtract } = require('./test');

exports.addAndSubtract = () => {
  add();
  subtract();
}

const subractOne = async () => {
  const result = await subtract(3,2);
  console.log(result - 1);
}

subractOne();
