function processPayment(amount) {
  console.log("collecting payment of " + amount);
}

function processOrder(orderId, amount) {
  console.log(orderId + " is being processed");
  processPayment(amount);
  console.log(orderId + " has been fully processed");
}

console.log("Processing orders")
processOrder(12321, 10.99);
processOrder(12322, 12.99);
processOrder(12323, 15);
console.log("All orders have been processed");
