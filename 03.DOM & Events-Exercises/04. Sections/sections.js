function create(sentences) {
    for( let sentence of sentences){
        let div = document.createElement('div');
        let paragraph = document.createElement('p');
        paragraph.style.display = 'none';
        paragraph.textContent = sentence;
        div.appendChild(paragraph);
        let mainDiv = document.getElementById('content');
        mainDiv.appendChild(div);


        function clickDiv() {
            paragraph.style.display = "block";
        }

        div.addEventListener("click", clickDiv);
    }

}