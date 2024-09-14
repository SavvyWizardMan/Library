const addBookBtn = document.querySelector('.add');
const dialog = document.querySelector('dialog');
const closeBtn = document.querySelector('.close');
const submitBtn = document.querySelector('.submit');
const cardBox = document.querySelector('.content');
const titleInput = document.querySelector('input[id="title"]');
const authorInput = document.querySelector('input[id="author"]');
const pagesInput = document.querySelector('input[id="pages"]');
const checkbox = document.querySelector('input[id="hasRead"]');
const inputs = document.querySelectorAll('input');

addBookBtn.addEventListener('click', () => {
    dialog.showModal();
});

closeBtn.addEventListener('click', () => {
    dialog.close();
});

class Books {
    constructor(title, author, pages, hasRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.hasRead = hasRead;
    }

    display() {
        for (let i = myLibrary.length - 1; i < myLibrary.length; i++) {
            const card = document.createElement('div');
            const h2 = document.createElement('h2');
            const author = document.createElement('p');
            const pages = document.createElement('p');
            const read = document.createElement('button');
            const remove = document.createElement('button');
    
            card.classList.add('card');
            card.setAttribute('data-book', i);
            read.classList.add('hasRead');
            remove.classList.add('remove');
    
            h2.innerText = myLibrary[i].title;
            author.innerText = myLibrary[i].author;
            pages.innerText = `${myLibrary[i].pages} pages`;
            read.innerText = myLibrary[i].hasRead === false ? 'Not read' : 'Read';
            remove.innerText = "Remove";
    
            card.appendChild(h2);
            card.appendChild(author);
            card.appendChild(pages);
            card.appendChild(read);
            card.appendChild(remove);
    
            cardBox.appendChild(card);
    
            const removeButton = document.querySelectorAll('.remove');
    
            for (let j = removeButton.length - 1; j < removeButton.length; j++) {
                removeButton[j].addEventListener('click', () => {
                    removeButton[j].parentNode.remove();
    
                    const divs = document.querySelectorAll('.content div');
    
                    for (let i = 0; i < divs.length; i++) {
                        divs[i].setAttribute('data-book', i);
                    }
    
                    myLibrary.splice(removeButton[j].getAttribute('data-book'), 1);
                });
            }
    
            const readButton = document.querySelectorAll('.hasRead');
    
            for (let i = readButton.length - 1; i < readButton.length; i++) {
                readButton[i].addEventListener('click', () => {
                    readButton[i].innerText === "Read" ? readButton[i].innerText = "Not read" : readButton[i].innerText = "Read";
                });
            }
        }
    }
}

const myLibrary = [new Books('The', 'Wizard', "43", true)];

myLibrary[0].display();


submitBtn.addEventListener('click', () => {

    for (let i of inputs) {
        if (i.validity.valueMissing || i.value > 5000) {
            return;
        }
    }

    function addBookToLibrary() {
        const newBook = new Books(titleInput.value, authorInput.value, pagesInput.value, checkbox.checked);
        myLibrary.push(newBook);
        newBook.display();
    }

    addBookToLibrary();

    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    checkbox.checked = false;
    dialog.close();
});