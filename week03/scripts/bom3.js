//Year actualization 
const date = new Date();
const year = date.getFullYear();
document.querySelector("#currentyear").textContent = year;


document.querySelector(
	"#lastModified"
).textContent = `Last Update: ${document.lastModified}`;


//the bom script
let chaptersArray = getChapterList() || [];

const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

chaptersArray.forEach(chapter => {
    displayList(chapter);
  });

  button.addEventListener('click', function() {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        ChapterList();
        input.value = '';
        input.focus();
    }
});

function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item; 
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete'); 
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
      list.removeChild(li);
      deleteChapter(li.textContent); 
      input.focus();
    });
  }

  function ChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
  }

  function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
  }

  function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
  }
