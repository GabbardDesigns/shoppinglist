const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemInput = document.querySelector('input.addItemInput');
const removeItemButton = document.querySelector('button.addItemButton');

const groceryListDiv = document.querySelector('.groceryList');
const electListDiv = document.querySelector('.electList');

const groceryListUl= groceryListDiv.querySelector('ul');
const groceryList= groceryListUl.children;

const electListUl= electListDiv.querySelector('ul');
const electList= electListUl.children;


function attachListItemButtons(li){
  let up = document.createElement('button');
  up.className='up';
  up.textContent='Up';
  li.appendChild(up);

  let down = document.createElement('button');
  down.className='down';
  down.textContent='Down';
  li.appendChild(down);
  
  let remove = document.createElement('button');
  remove.className='remove';
  remove.textContent='Remove';
  li.appendChild(remove);

 // var listButtons= '<button class="up"> Up </button> <button class="down">Down</button><button class="remove">Remove</button>';
 };

 groceryListUl.addEventListener('click', (event) => {
  if(event.target.tagName=='BUTTON'){
    if (event.target.className=='remove'){
    let child = event.target.parentNode;
    let parent =child.parentNode;
    parent.removeChild(child);
    }
    else if(event.target.className=='up'){
      let child = event.target.parentNode;
      let sibling = child.previousElementSibling;
      let parent =child.parentNode;
      if (sibling){
      parent.insertBefore(child,sibling);
    }
  }
    else if(event.target.className=='down'){
      let child = event.target.parentNode;
      let sibling = child.nextElementSibling;
      let parent =child.parentNode;
      if (sibling){
      parent.insertBefore(sibling,child);
    }
 }
 }}); 

 electListUl.addEventListener('click', (event) => {
  if(event.target.tagName=='BUTTON'){
    if (event.target.className=='remove'){
    let child = event.target.parentNode;
    let parent =child.parentNode;
    parent.removeChild(child);
    }
    else if(event.target.className=='up'){
      let child = event.target.parentNode;
      let sibling = child.previousElementSibling;
      let parent =child.parentNode;
      if (sibling){
      parent.insertBefore(child,sibling);
    }
  }
    else if(event.target.className=='down'){
      let child = event.target.parentNode;
      let sibling = child.nextElementSibling;
      let parent =child.parentNode;
      if (sibling){
      parent.insertBefore(sibling,child);
    }
 }
 }}); 

 for (let i = 0; i< groceryList.length; i++){
   attachListItemButtons(groceryList[i]);
 }

 for (let i = 0; i< electList.length; i++){
  attachListItemButtons(electList[i]);
}


// listDiv.addEventListener('mouseover', (event) => {
//   if(event.target.tagName=='LI'){
//    event.target.textContent = event.target.textContent.toUpperCase();
//  }
//  }); 
 
//  listDiv.addEventListener('mouseout', () => {
//   if(event.target.tagName=='LI'){
//     event.target.textContent = event.target.textContent.toLowerCase();
//  }}); 
 

document.addEventListener('click',(event) => {
  console.log(event.target);
});

// toggleList.addEventListener('click', () => {
//   if (listDiv.style.display == 'none') {
//     toggleList.textContent = 'Hide list';
//     listDiv.style.display = 'block';
//   } else {
//     toggleList.textContent = 'Show list';                        
//     listDiv.style.display = 'none';
//   }                         
// });

// descriptionButton.addEventListener('click', () => {
//   descriptionP.innerHTML = descriptionInput.value + ':';
//   descriptionInput.value = '';
// });

function addNewItem(listName){
let ul = listName;
let li = document.createElement('li');
li.innerHTML = addItemInput.value;
attachListItemButtons(li);
ul.appendChild(li);
addItemInput.value='';
}

// removeItemButton.addEventListener('click', () => {
//   let ul = listUl;
//   let li = document.createElement('li');
//   li.textContent = removeItemInput.value;
//   ul.removeChild(li);
//   removeItemInput.value='';
// });
