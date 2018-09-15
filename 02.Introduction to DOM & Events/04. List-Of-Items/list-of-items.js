function addItem() {
    if (document.getElementById("newItemText").value !== '') {
        let text = document.getElementById("newItemText").value;
        let newListItem = document.createElement("li");
        newListItem.textContent = text;
        let list = document.getElementById("items");
        list.appendChild(newListItem);
        document.getElementById("newItemText").value = "";
    }
    
}