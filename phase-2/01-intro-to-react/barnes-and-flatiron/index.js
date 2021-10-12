books = [
    {
        title: 'Eloquent JavaScript: A Modern Introduction to Programming',
        price: 10,
        inventory: 10
    },
    {
        title: 'JavaScript & JQuery: Interactive Front-End Web Development',
        price: 45,
        inventory: 2
    },
    {
        title: 'JavaScript: The Good Parts',
        price: 36,
        inventory: 8
    },
    {
        title: 'JavaScript: The Definitive Guide',
        price: 25,
        inventory: 0
    },
    {
        title: 'You Don’t Know JS',
        price: 6,
        inventory: 7
    }

]

//Loop through books and update every time in books
//Pushes updated books into a new array and return that updated array of books
const inventoryOnSale = books.map((book) => fiftyPercentSale(book))
const reStockedInventory = books.map((book) => stockItems(book))


//updates all of the items prices to 50% off
function fiftyPercentSale(item){
    const newItem = Object.assign({}, item)
    newItem.price = Math.floor(item.price/2)
    return newItem
}


//restocks the items inventory by 5
function stockItems(item){
    const newItem = Object.assign({}, item)
    newItem.inventory+=5
    return newItem
}
