// Question 1
function multiplication_table(input_number) {
    for (let index = 1; index < 13; index++) {
        console.log(`${input_number} x ${index} = ${index * input_number}`)
    }
}
// multiplication_table(6)

// Question 4 (The continue statement is not necessary in the case. )
function print_even_odd() {
    let index = 0
    while (index <= 20) {
        if (index % 2 === 0) {
            console.log(index + " is even");
            index++;
            continue;
        } else {
            console.log(index + " is odd");
        }
        index++
    }
}
// print_even_odd()

// Question 5
function add(num1, num2) { return num1 + num2 }
// console.log(add(6, 1))
function subtract(num1, num2) { return num1 - num2 }
// console.log(subtract(6, 1))
function multiply(num1, num2) { return num1 * num2 }
// console.log(multiply(6, 1))
function divide(num1, num2) { return num1 / num2 }
// console.log(divide(6, 1))


// Question 6
let max_range = 13
let low_range = 1
function multiplication_table_with_recursion(input_number) {
    if (low_range >= max_range) {
        return;
    }
    console.log(`${input_number} x ${low_range} = ${low_range * input_number}`)
    low_range++
    multiplication_table_with_recursion(input_number)
}
// multiplication_table_with_recursion(6)

// Question 7
let start_number = 1
let end_number = 10
function count_upwards() {
    console.log(start_number)
    if (start_number >= end_number) {
        console.log(`end of count to ${end_number}`)
        return;
    }
    start_number++
    count_upwards()
}
// count_upwards()

// Question 9
let variable
console.log(typeof variable)

// Question 10
function count_down_even_number() {
    let index = 20
    while (index > 0) {
        if (index % 2 === 0) {
            console.log(index)
        }
        index--
    }
}
// count_down_even_number()