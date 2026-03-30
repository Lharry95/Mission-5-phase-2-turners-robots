// prompts for cust
const questionsForItems = [
  {
    type: "input",
    name: "title",
    message: "title:",
  },
  {
    type: "input",
    name: "image",
    message: "image:",
  },
  {
    type: "input",
    name: "price",
    message: "price:",
  },
  {
    type: "input",
    name: "condition",
    message: "condition:",
  },
  {
    type: "input",
    name: "dimensions",
    message: "dimensions:",
  },
  {
    type: "input",
    name: "shipping_and_pickup",
    message: "shipping_and_pickup:",
  },
  {
    type: "input",
    name: "payment_options",
    message: "payment_options:",
  },
];

module.exports = { questionsForItems };
