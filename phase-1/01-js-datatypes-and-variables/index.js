// -------------------------------------------

console.log("Check Your Answers Here!");
console.log("------------------------");

// 🚧 Break Out Activity 1: Using let vs. const

    // Properly declare "x" using "const"

    // const x;

    const x = 5;

    // const x;

    console.log(`Success! x = ${x}`);

    // Properly declare "y" using "let"

    // 🚨 Uncomment the code below to continue:

    // let y;

    let y = 5; 

    // let y;

    console.log(`Success! y = ${y}`);

    // Refactor the code below to get a successful response in console

    // 🚨 Uncomment the code below to continue:

    const a = 2;
    
    // a = 2;
    
    // let b;
    
    let b = 4
    
    console.log(`Success! ${a} + ${a} = ${b}`);

// 🚧 Break Out Activity 2: Using if...else

    // 🚨 Uncomment the code below to continue:

    // 🚧 Set a value for "time" between 0 and 24
    let time = 12

    // 💡 If "time" is less than or equal to 11...
    if (time <= 11) {
        console.log(`${time} is in the AM.`)
    
    // 💡 In all other cases...
    } else {
        console.log(`${time} is in the PM.`)
    }

    // ✨ BONUS: Try refactoring the above expression using a ternary operator.

    { time <= 11 ? console.log(`${time} is in the AM.`) : console.log(`${time} is in the PM.`) }

// 🚧 Break Out Activity 3: Using if...else...if

    // We are given a variable "marks." Our task is to print:

    // - "AA" if marks is greater than 90.
    // - "AB" if marks is greater than 80 and less than or equal to 90.
    // - "BB" if marks is greater than 70 and less than or equal to 80.
    // - "BC" if marks is greater than 60 and less than or equal to 70.
    // - "CC" if marks is greater than 50 and less than or equal to 60.
    // - "CD" if marks is greater than 40 and less than or equal to 50.
    // - "DD" if marks is greater than 30 and less than or equal to 40.
    // - "FF" if marks is less than or equal to 30.

    // 🚨 Uncomment the code below to continue

    // 🚨 Assign a value to "marks" between 0 and 100
    let marks = 100;

    // 🚨 Format your if...else if...else conditional below
    if(marks > 90) {
        console.log("AA");
    } else if (marks > 80) {
        console.log("AB")
    } else if (marks > 70) {
        console.log("BB")
    } else if (marks > 60) {
        console.log("BC")
    } else if (marks > 50) {
        console.log("CC")
    } else if (marks > 40) {
        console.log("CD")
    } else if (marks > 30) {
        console.log("DD")
    } else {
        console.log("FF")
    }