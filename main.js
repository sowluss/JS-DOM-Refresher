var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form Submit Event
form.addEventListener('submit', addItem);

// delete event
itemList.addEventListener('click', removeItem);

// filter event
filter.addEventListener('keyup', filterItems);

// Add item

function addItem(e) {
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // create new li element
  var li = document.createElement('li');
  // add class
  li.className = 'list-group-item';
  //  add text node with input value
  li.appendChild(document.createTextNode(newItem));

  //  create delete button element

  var deleteBtn = document.createElement('button');

  //  add classes to delete button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  //  append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // append button to li
  li.appendChild(deleteBtn);

  // append li to list
  itemList.appendChild(li);
}

// remove item
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure?')) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//  filter items

function filterItems(e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // get list
  var items = itemList.getElementsByTagName('li');
  // convert to an array
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}