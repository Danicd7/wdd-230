//Year actualization 
const date = new Date();
const year = date.getFullYear();
document.querySelector("#currentyear").textContent = year;


document.querySelector(
	"#lastModified"
).textContent = `Last Update: ${document.lastModified}`;


//the bom script 
const input = document.querySelector("#favchap");
const button = document.querySelector("#submit");
const list = document.querySelector("#list");

button.addEventListener('click', function() {
    if (input.value != '') {
        const listItem = document.createElement('li');
        const removeButton = document.createElement('button');

        const item = input.value;
        listItem.textContent = item;
        removeButton.textContent = '❌';

        listItem.appendChild(removeButton);
        list.appendChild(listItem);

        removeButton.addEventListener('click', function() {
            list.removeChild(listItem);
            input.focus();
        })
        input.value = '';
        input.focus();
    }
});
