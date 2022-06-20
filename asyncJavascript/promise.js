/* const promise1 = new Promise((resolve, reject) => {
    //resolve olumlu, reject olumsuz sonuç
    resolve('Veriler alındı.');
    reject('Bağlantı hatası'); //eğer ki reject'i resolve'un öncesinde yazarsak bu sefer hatayı yakalar ilk olarak burada.
})

//console.log(promise1)
promise1
    .then(value => {
        console.log(value)
    }).catch(err => {
        console.log(err)
    })//then ile resolve yakalamış olduk,catch ile de reject. Böyle zincirleme şekilde kullanılırlar. */


const books = [
    {name: 'Kitap 1', author: 'Yazar 1'},
    {name: 'Kitap 2', author: 'Yazar 2'},
    {name: 'Kitap 3', author: 'Yazar 3'},
]

const listBooks = () => {
    books.map(book => {
        console.log(book.name);
    })
};

const addBook = (newBook) => {

    const promise1 = new Promise((resolve, reject) => {
        books.push(newBook);
        //resolve(books);
        reject('Bir hata oluştu!')
    })
    return promise1
}

addBook({ name: 'Kitap 4', author: 'Yazar 4' })
    .then(() => {
        console.log('YENI LISTE')
        listBooks();
    })
    .catch((error) => {
        console.error(error)
    })