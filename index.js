var customerQueue = [];

function takeANumber(customerQueue, customerName) {
  var no_in_line = customerQueue.push(customerName);
  return `Welcome, customerName. You are number ${no_in_line} in line.`;
}

function nowServing(customerQueue) {
  if (customerQueue.length === 0) {
    return "There is nobody waiting to be served!";
  }
  var topOfQueue = customerQueue.shift();
  return topOfQueue;
}

function currentLine() {
  
}