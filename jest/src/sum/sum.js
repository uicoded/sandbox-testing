function sum(...args) {
  if (arguments.length) {
    return args.reduce((arg, acc) => acc + arg);
  } else {
    throw new Error("Invalid arguments");
  }
}

module.exports = sum;
