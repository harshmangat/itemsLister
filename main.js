let itemList = document.getElementById('items')
let form = document.getElementById('addForm')
let filter = document.getElementById('filter')

form.addEventListener('submit', addItem)
itemList.addEventListener('click', removeItem)
filter.addEventListener('keyup', filterItems)


function addItem(e) {
  e.preventDefault()

  // console.log('submit')

  // get Input value

  let newItem = document.getElementById('item').value;
  // console.log(newItem);

  //create new item list
  let li = document.createElement('li')

  // add class
  li.className = 'list-group-items'

  //add text node
  li.appendChild(document.createTextNode(newItem))


//delete button

let deleteBtn = document.createElement('button')

// add class
deleteBtn.className = 'delete'

// create text node

deleteBtn.appendChild(document.createTextNode('x'))

//append button
li.appendChild(deleteBtn)

 
  // append item to list
  itemList.appendChild(li)

}



//remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are you sure?')){
      let li =  e.target.parentElement;
      itemList.removeChild(li)
    }
  }
}

// filter items

function filterItems(e){
  let text = e.target.value.toLowerCase()
  // console.log(text);
  // get list
 let items = itemList.getElementsByTagName('li')
  // console.log(item);

  Array.from(items).forEach((item)=>{
    let itemName = item.firstChild.textContent
    // console.log(itemName);
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block'
    }else{
      item.style.display = 'none'
    }
  })

}