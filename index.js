var customerQueue = [];

function takeANumber(customerQueue, customerName) {
  var no_in_line = customerQueue.push(customerName);
  return `Welcome, customerName. You are number ${no_in_line} in line.`;
}

function nowServing(customerQueue) {
  var topOfQueue = customerQueue.shift();
  return topOfQueue;
}