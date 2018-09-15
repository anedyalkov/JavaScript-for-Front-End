function toggle() {
    let button = document.querySelector('.button');
    let divExtra = document.getElementById('extra');
    
    if (button.textContent === 'More' ) {
        divExtra.style.display = 'block';
        button.textContent = 'Less';
    }
    else{
        divExtra.style.display = 'none';
        button.textContent = 'More';
    }
     
}