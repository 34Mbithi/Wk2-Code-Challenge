document.addEventListener('DOMContentLoaded', function() {
  const itemInput = document.getElementById('item');
  const addItemButton = document.getElementById('addItem');
  const clearListButton = document.getElementById('clearList');
  const list = document.getElementById('list');

  // Initialize shopping list array
  let shoppingList = [];

  // Function to render shopping list
  function renderShoppingList() {
      // Clear existing list items
      list.innerHTML = '';

      // Render each item in the shoppingList array
      shoppingList.forEach((item, index) => {
          const li = document.createElement('li');
          li.textContent = item.name;

          // Add a class if item is completed
          if (item.completed) {
              li.classList.add('completed');
          }

          // Add click event listener to mark item as purchased
          li.addEventListener('click', () => {
              toggleCompleted(index);
          });

          list.appendChild(li);
      });
  }

  // Function to toggle completed status of an item
  function toggleCompleted(index) {
      shoppingList[index].completed = !shoppingList[index].completed;
      renderShoppingList();
  }

  // Event listener for Add button
  addItemButton.addEventListener('click', () => {
      const itemName = itemInput.value.trim();
      if (itemName !== '') {
          shoppingList.push({ name: itemName, completed: false });
          renderShoppingList();
          itemInput.value = '';
      }
  });

  // Event listener for Clear List button
  clearListButton.addEventListener('click', () => {
      shoppingList = [];
      renderShoppingList();
  });

  // Initial render of shopping list
  renderShoppingList();
});
