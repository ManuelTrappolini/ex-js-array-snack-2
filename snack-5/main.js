//Usando la l'API https://boolean-spec-frontend.vercel.app/freetestapi/books/{id} usa la combinazione di .map() e Promise.all(), per creare una funzione (getBooks) che a partire da un array di id (ids), 
//ritorna una promise che risolve un array di libri (books).
//Testala con l’array [2, 13, 7, 21, 19] .

const ids = [2, 13, 7, 21, 19]

async function getBooks(array) {
    try {
        const bookPromises = array.map(
            id => fetch(`https://boolean-spec-frontend.vercel.app/freetestapi/books/${id}`)
                .then(res => res.json())
        )
        const books = await Promise.all(bookPromises)

        console.log(books);

        return books
    } catch (error) {
        console.error('Errore:', error)
    }

}

getBooks(ids)

