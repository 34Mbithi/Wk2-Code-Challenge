// Get DOM elements
const itemInput = document.getElementById('itemInput');
const addItemBtn = document.getElementById('addItemBtn');
const clearListBtn = document.getElementById('clearListBtn');
const shoppingList = document.getElementById('shoppingList');

// Initialize shopping list array (simulating local storage)
let items = [];

// Function to render shopping list
function renderList() {
    // Clear existing list items
    shoppingList.innerHTML = '';

    // Loop through items array and create list items
    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item.name;
        if (item.purchased) {
            li.classList.add('purchased');
        }
        
        // Mark item as purchased on click
        li.addEventListener('click', () => {
            item.purchased = !item.purchased;
            renderList(); // Update UI
            saveToLocalStorage(); // Save to local storage
        });

        shoppingList.appendChild(li);
    });
}

// Function to add item to shopping list
function addItem() {
    const itemName = itemInput.value.trim();
    if (itemName !== '') {
        items.push({ name: itemName, purchased: false });
        renderList(); // Update UI
        saveToLocalStorage(); // Save to local storage
        itemInput.value = ''; // Clear input field
    }
}

// Function to clear the shopping list
function clearList() {
    items = [];
    renderList(); // Update UI
    saveToLocalStorage(); // Save to local storage
}

// Event listeners
addItemBtn.addEventListener('click', addItem);
clearListBtn.addEventListener('click', clearList);

// Local storage functions
function saveToLocalStorage() {
    localStorage.setItem('shoppingList', JSON.stringify(items));
}

function loadFromLocalStorage() {
    const storedItems = localStorage.getItem('shoppingList');
    if (storedItems) {
        items = JSON.parse(storedItems);
        renderList(); // Initial render from local storage
    }
}

// Load from local storage on page load
loadFromLocalStorage();
