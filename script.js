let searchButton = document.getElementById('searchBtn');
let searchInput = document.getElementById('searchInpt');

searchButton.addEventListener('click', function(){
    if(searchInput.offsetWidth > 0){
        searchInput.style.width = '0px';
        searchInput.style.padding = '0px';
    }
    else{
        searchInput.style.width = '230px';
        searchInput.style.padding = '15px';
    }
})

