// ✅ Common Types of Errors

    // lexical => unknown symbols / characters

        // let num1 = 5, num2 = 10;

        // let product = num1 * num2;

        // console.log(product);

    // syntactic => right symbols, wrong syntax

        // let x = prompt("What is 5 x 5?");
        
        // while (x != 25) {
        //     alert("Incorrect");
        //     x = prompt("What is 5 x 5?");
        // }

    // execution => right syntax, wrong execution

        // let num1 = prompt("Write a number");
        // let num2 = 10;
        
        // console.log(num1);

        // if (num1 === '') {
        //     console.log(`Please enter a valid integer.`);
        //     let num1 = prompt("Write a number");
        // } else if (num1 < num2) {
        //     console.log(`The number you wrote, ${num1}, is less than 10`);
        // } else if (num1 > num2) {
        //     console.log(`The number you wrote, ${num1}, is more than 10`);
        // } else {
        //     console.log(`The number you wrote, ${num1}, is equal to 10`);
        // }

    // logic => faulty design

        // console.log("counting from 1 to 10... ");

        // for (i=1; i<11; i++) {
        //   console.log(i);
        // }
        
// ✅ Console Method

    // browser provides an object called "console" that we can invoke specific methods on

    // console.log() => provides general information

        // console.log("Simple Console Log");

    // console.error => returns an error in console

        // console.error("Error");

    // console.warn() => returns warning in console, between log() and error() in severity
 
        // console.warn("Warning");

    // console.table() => prints a table of entries

        // let myArray = [
        //     { 
        //         id: 1,
        //         name: "First" 
        //     },
        //     { 
        //         id: 2,
        //         name: "Second" 
        //     }, 
        //     { 
        //         id: 3,
        //         name: "Third" 
        //     },
        //     { 
        //         id: 4,
        //         name: "Fourth" 
        //     },
        //     { 
        //         id: 5,
        //         name: "Fifth"
        //     },
        // ];

        // console.table(myArray);

        // select a subset of columns to log
        // console.table(myArray, ["name"]);

    // console.assert() => asserts that a given condition is true, commonly used for testing

        // function doSomething(num) {
        //     return num;
        // }

        // console.assert(condition, message if condition is false);

        // console.assert(doSomething(5) === 5, {number: num, errorMsg: 'The number is not 5'});

        // Test Driven Development (TDD) => red, green, refactor

    // console.trace() => displays a "trace", shows how code ended up at a given point

        // function first() {
        //     second();
        // }
        // function second() {
        //     third();
        // }
        // function third() {
        //     console.trace();
        // }
        
        // second();

// ✅ Using Debugger

    // debugger => reserved keyword (ES6, advanced syntax)

        // function doSomething() {
        //     debugger;
        // }

        // doSomething();

// -------------------------------------------

console.log("------------------------");
console.log("⬇️ Break Out Activities ⬇️");
console.log("🚨 Comment Out Lecture Code Above Before Starting 🚨");
console.log("💡 Use console.log() To Check Answers 💡");
console.log("------------------------");

// 🚧 Break Out Activity 1: Catching General JS Errors

    // 🚨 Comment out any conflicting code above before proceeding.
    
    const BASE_URL = 'https://api.openbrewerydb.org/breweries';
    const brewList = document.getElementById('brew-list');
    const brewForm = document.getElementById('brew-form');

    // ❗ New Constants
    const searchBox = document.querySelector('#brew-input');
    const autoCompleteBox = document.querySelector('#autocomplete');

    brewForm.addEventListener('submit', searchBreweries);

    function renderBrew(brew){
        const div = document.createElement('div');
        div.id = `brew-card-${brew.id}`;
        div.className='card alert-success';
        div.style = 'padding: 20px; margin: 20px;'

        const icon = document.createElement('h1');
        icon.textContent='🍺';
        
        const header = document.createElement('h3')
        header.textContent = `${brew.name}`;

        const p = document.createElement('p')
        p.id = `brew-info-${brew.id}`
        p.textContent = `
            Type: ${brew.brewery_type} - 
            City: ${brew.city} -
            State: ${brew.state}
        `
        div.append(icon, header, p);
        brewList.appendChild(div);
    }

    function returnNone() {
        const div = document.createElement('div');
        div.className='card alert-warning';
        div.style = 'padding: 20px; margin: 20px;'
        
        const icon = document.createElement('h1');
        icon.textContent='😢';

        const header = document.createElement('h3')
        header.textContent = "No Breweries Found";

        div.append(icon, header);
        brewList.appendChild(div);
    }

    function searchBreweries(e){

        e.preventDefault();
        
        brewList.replaceChildren();

        let query = document.querySelector('#brew-input').value;

        brewForm.reset();

        fetch(BASE_URL + `/search?query=${query}`) // returns a promise
        .then(resp => resp.json()) // another promise
        .then(breweries => {
            { breweries.length == 0 ? returnNone() : breweries.forEach(renderBrew) }
        });
    }

    // 1️⃣ Create a function (renderAuto) that:

        //  ✔️ Accepts a single "brewery" object

        //  ✔️ Creates an <option> DOM Element (item) and sets its value to "brewery.name"

        //  ✔️ Appends "item" to autoCompleteBox

        //  ❗ Confirm that "console.assert" below does not return an error.

        // 	✨ BONUS: Use "console.log()" along with other debugging tools to keep track of your progress.

        function renderAutoItem(brewery) {
            // create <option> DOM element / assign to variable 
            let item = document.createElement('option');

            // assign value attribute to be "brewery.name"
            item.value = brewery.name;

            // append <option> to autoCompleteBox
            autoCompleteBox.append(item);
        }

        // ✅ Check Answer: 
        // let sampleBrewery = { name: "Sample Brewery" };
        // document.addEventListener('DOMContentLoaded', renderAutoItem(sampleBrewery));

        // ❗ Check Assertion
        // console.assert(autoCompleteBox.children.length > 0, { errorMsg: "autoCompleteBox is empty" });

// 🚧 Break Out Activity 2: Catching Fetch Request Errors

    // 🚨 Comment out any conflicting code above before proceeding.

    // 1️⃣ Create a function (returnAutoComplete) that:

        //  ✔️ Accepts a single event "e"

        //  ✔️ Pulls the value of the target of the event (e.target.value) and stores it in a variable, "query"

        //  ✔️ Uses "query" to initiate the appropriate fetch request (https://www.openbrewerydb.org/documentation/04-autocomplete)

        //  ✔️ Parses the fetch response into JSON 
        
        //  ✔️ Clears out autoCompleteBox before running "renderAutoItem" for each newly retrieved brewery object

        //  ✨ BONUS: Use "console.table" to take a closer look at "breweries" returned from fetch.

        // 	✨ BONUS: Include meaningful error catching / reporting using "console.error"

        //  ❗ Make sure to uncomment / enable your working "renderAutoItem" function from Break Out Activity #1

        //  ❗ Confirm that "console.assert" below does not return an error.

        function returnAutoComplete(e) {
            
            // capture the input value from the event
            let query = e.target.value;

            // set up appropriate fetch request url according to openbrewerydb documentation 
            // https://www.openbrewerydb.org/documentation/04-autocomplete
            fetch(BASE_URL + `/autocomplete?query=${query}`)
            .then(resp => resp.json())
            .then(breweries => {

                // clear out autoCompleteBox before...
                autoCompleteBox.replaceChildren();

                // ...invoking renderAutoItem for each brewery
                breweries.forEach(renderAutoItem);
                
                // optional => use console.table to get a clearer picture of array in console
                // console.table(breweries);
            
            // use .catch to fire off a custom console.error in the event that the request fails
            }).catch(error => {
                console.log(console.error(`ERROR: ${error}`));
            });
        }

        // ✅ Check Answer: 
        searchBox.addEventListener('input', returnAutoComplete);