//Creare un array (availableBooks) che contiene tutti i libri disponibili.
//Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)
//Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi).


const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];

const availableBooks = books.filter(book => book.available == true)
console.log('availableBooks:', availableBooks);

const discountedBooks = availableBooks.map(book => {
    const price = parseFloat(book.price.replace('€', ''))
    const discountedPrice = (price * 0.8).toFixed(2)
    return { ...book, discountedPrice: `${discountedPrice} €` }
})
console.log('discountedBooks:', discountedBooks);

fullPricedBook = discountedBooks.find(book => {
    const price = parseFloat(book.discountedPrice.replace('€', ''))

    //confronta il prezzo con il valore arrotondato

    return price === Math.floor(price)
})
console.log('fullPricedBook:', fullPricedBook);

