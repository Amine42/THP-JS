const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 9 },
    { title: 'A la recherche du temps perdu', id: 237634, rented: 2 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 6 },
    { title: 'Les frères Karamazov', id: 450911, rented: 5 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
    // { title: 'Guerre et Paix', id: 748147, rented: 0 }
];


let booksread = true;
books.forEach(book => {
    if (book.rented === 0){
        booksread = false;
    }
});

if (booksread == true) {
    console.log("tout les livres ont ete lus au moin une fois");
} else {
    console.log(" Ah tu n'as pas tout lu !!!!");
}

books.forEach(book =>{
    if(book.id === 873495){
        console.log(`Le livre avec l'ID 873495 se nomme : "${book.title}"`);
    }
});

function max_rented_book(books) {
    let i = 0;
    let max = 0;
    let name = ""

    while (i < books.length) {
        if (books[i].rented > max) {
            max = books[i].rented;
            name = books[i].title;
        }
        i++;
    }
    console.log("le livre qui a ete le plus de fois pris a ete pris", max, "fois", "le titre du livre est:", name)
}

function min_rented_book(books) {
    let i = 0;
    let min = books[0].rented;
    let name = books[0].title;

    while (i < books.length) {
        if (books[i].rented < min) {
            min = books[i].rented;
            name = books[i].title;
        }
        i++;
    }
    console.log("le livre qui a ete le moin de fois pris a ete pris", min, "fois", "le titre du livre est:", name)
}

let index = books.findIndex(book => book.id === 133712);
books.splice(index,1);
console.log("Le livre a été supprimé ");
console.log(books);


function sort_tab(books) {
    return books.sort((a, b) => a.title.localeCompare(b.title));
}


max_rented_book(books);
min_rented_book(books);
console.log(sort_tab(books));