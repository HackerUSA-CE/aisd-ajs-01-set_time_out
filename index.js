// // Example: Hello World Example
let demo = "hello";

setTimeout(() => {
  demo = "goodbye";
  console.log(demo); // expected: goodbye
}, 3000);

console.log(demo); // expected: hello


// Example: Simulating User Input with setTimeout
  let userInput = "Hello, world!";
    console.log("User typed:", userInput); 

const simulateUserInput = () => {
  setTimeout(() => {
  
    if (userInput.length > 10) {
      console.log("Long input detected!");
    } else {
      console.log("Short input.");
    }
  }, 3000);
};

simulateUserInput();

// Example: Immediate and Delayed Greeting with Arrow Function

console.log("Hello from outside the timer!");

const greet = () => {
  console.log("Hello from inside the Function!");
};

setTimeout(() => {
  greet();
}, 3000);


setTimeout(() => {
  console.log("Hello from inside the timer !");
}, 6000);


// Example: Store Open Logic with Nested setTimeout
let store_status = "open";

console.log("Initial status:", store_status); // expected: open

const updateStatus = () => {
  setTimeout(() => {
    store_status = "closed";
    console.log("Status updated:", store_status); // expected: closed

    // Nested setTimeout to print "The store will open soon."
    setTimeout(() => {
      console.log("The store will open soon."); // Runs 2 seconds after status update.

      // Another nested setTimeout to print "Now open!" after a further delay.
      setTimeout(() => {
        if (store_status === "closed") {
          console.log("Now open!"); // Runs after 3 more seconds.
        } else {
          console.log("The store is still closed."); // In case status didn't change.
        }
      }, 3000); // Additional 3-second delay.
    }, 2000); // Runs 2 seconds after status update.
  }, 5000); // Status updates after 5 seconds.
};

updateStatus();

