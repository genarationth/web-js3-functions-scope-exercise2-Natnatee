// ### Exercise 2.1 create a expression function for checking if a number is even</br>

// ### Exercise 2.2 converts the function from Exercise 2.1 into an arrow function</br>
// ### Exercise 2.1
let checking = function(number) {
    if (number % 2 == 0) {
        console.log("The number is even.");
    } else {
        console.log("The number is odd.");
    }
};
checking(4)
// ### Exercise 2.2
let checkingg = (number) => {
    if (number % 2 == 0) {
        console.log("The number is even.");
    } else {
        console.log("The number is odd.");
    }
};

checkingg(5)