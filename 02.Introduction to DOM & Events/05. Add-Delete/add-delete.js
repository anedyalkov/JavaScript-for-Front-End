function addItem() {
    if (document.getElementById("newText").value !== "") {
        let text = document.getElementById("newText").value;
        let li = document.createElement("li");
        li.textContent = text;
        let ul = document.getElementById("items");
        ul.appendChild(li);
        document.getElementById("newText").value = "";
        let span = document.createElement("span");
        span.innerHTML = "<a href='#'>[Delete]</a>";
        li.appendChild(span);

        function deleteItem() {
            let li = this.parentNode.parentNode;
            let ul = li.parentNode;
            ul.removeChild(li);
        }

        span.firstChild.addEventListener("click", deleteItem);
    }
    


}