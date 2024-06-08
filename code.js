const container = document.querySelector("#container");
const btn = document.querySelector("button");
const input = document.querySelector("input");


let idNum = 0;

function addItem() {
    if (input.value != "") { 
        const li = document.createElement("li");
        li.textContent = input.value;
        input.value = "";
        li.id = idNum;

        const delBtn = document.createElement("button");
        delBtn.id = idNum;

        const span = document.createElement("span");


        delBtn.onclick = () => deleteItem(delBtn.id);
        delBtn.textContent = "Delete";

        li.appendChild(delBtn);
        li.appendChild(span);
        container.appendChild(li);

        idNum += 1;
    }
    input.focus();
}

function deleteItem(id) {
    document.getElementById(id).remove();
}

btn.onclick = addItem;