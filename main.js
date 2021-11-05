/**
 * Ricreiamo un feed social aggiungendo al layout di base fornito (allegato sotto) il nostro codice javascript in cui:
- Creiamo il nostro array di 5 oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data, testo del post, immagine, numero di likes.
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es: https://picsum.photos/id/237/600/350
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
Inserire a inizio del file JavaScript una sezione di commento dove scrivere gli step richiesti di logica in italiano, per aiutarvi a ragionare prima della stesura del codice.
 */

/**
 * Steps necessari:
 * 1. Creazione array con contenuto dei post.
 * 2. Creare un ciclo for per iterare l'array e creare i post.
 * 3. Inserire valori dinamici all'interno del ciclo per creare automaticamente i post.
 * 4. Provare a creare una funziona per automatizzare il processo e renderlo facilmente riproducibile.
 */


const posts = [
    {
        profilePic: 'https://unsplash.it/300/300?image=15',
        profileName: 'Phil Mangione',
        date: '4 mesi fa',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias',
        picture: 'https://unsplash.it/600/300?image=171',
        likes: '80',
    },
    {
        profilePic: 'https://unsplash.it/300/300?image=16',
        profileName: 'Lucia Montenegro',
        date: '1 ora fa',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias',
        picture: 'https://unsplash.it/600/300?image=172',
        likes: '56',
    },
    {
        profilePic: 'https://unsplash.it/300/300?image=17',
        profileName: 'Luigi Russo',
        date: '3 mesi fa',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias',
        picture: 'https://unsplash.it/600/300?image=173',
        likes: '2',
    },
    {
        profilePic: 'https://unsplash.it/300/300?image=18',
        profileName: "Mario D'Antò",
        date: '4 anni fa',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias',
        picture: 'https://unsplash.it/600/300?image=174',
        likes: '29',
    },
    {
        profilePic: 'https://unsplash.it/300/300?image=19',
        profileName: 'John Doe',
        date: '6 giorni fa',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias',
        picture: 'https://unsplash.it/600/300?image=175',
        likes: '5.4M',
    },
];

console.log(posts);
console.table(posts);

const postsContainer = document.querySelector('.posts-list');
console.log(postsContainer);

genPosts(postsContainer, posts);

/**
 * Generate posts function
 */

function genPosts(domContainer, array) {
    domContainer.innerHTML = '';

    for(let i = 0; i < array.length; i++) {
        const data = array[i];
    
        domContainer.innerHTML += `

        <div class="post">
                <div class="post__header">
                    <div class="post-meta">                    
                        <div class="post-meta__icon">
                            <img class="profile-pic" src="${data.profilePic}" alt="${data.profileName}">                    
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${data.profileName}</div>
                            <div class="post-meta__time">${data.date}</div>
                        </div>                    
                    </div>
                </div>
                <div class="post__text">${data.postText}</div>
                <div class="post__image">
                    <img src="${data.picture}" alt="">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <a class="like-button  js-like-button" href="#" data-postid="1">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </a>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="like-counter-1" class="js-likes-counter">${data.likes}</b> persone
                        </div>
                    </div> 
                </div>            
        </div>`;
    }
}