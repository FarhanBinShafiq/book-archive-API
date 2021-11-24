const searchBooks = () => {
    const searchBox = document.getElementById('search-box');
    const searchText = searchBox.value;
    //console.log(searchField);
    searchBox.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    if (searchText === '') {
        alert('Search filed can not be empty')
    } else {
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchBooks(data.docs))
    }
}




const displaySearchBooks = (books) => {
    const booksCard = document.getElementById('books-card');
    //Search items number
    const totalItem = books.length;
    document.getElementById("total-item-found").innerText = `Total Books:${totalItem}`;

    if (totalItem === 0) {
        searchResult.innerText = 'No Result Found...';
    }
    books.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col');

        div.innerHTML = ` 
        <div class="card bg-black">
        <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top img-fluid" alt="">
            <div class="card-body" >
            <h5 class="card-title text-light" >Title: ${book.title} </h5> 
            <p class="card-text text-light" > Author: ${book.author_name} </p> 
            <p class="card-text text-light" > First Published Year: ${book.first_publish_year} </p> 
            <p class="card-text text-light" > Published Date: ${book.publish_date} </p>
        </div> 

        </div>
                        `


        booksCard.appendChild(div);
    })


}