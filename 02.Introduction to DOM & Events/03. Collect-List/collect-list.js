function extractText() {
   let listItems = document.querySelectorAll('li');

   let textArea = document.getElementById('result');

    for (let node of listItems) {
        textArea.value += node.textContent + "\n";
    }
}