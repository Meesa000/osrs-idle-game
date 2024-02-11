const mainContainer = document.querySelector('.main-container');
const inventoryLink = document.getElementById('inventory-link');
const mainHeader = document.querySelector('.header-container-top');

inventoryLink.addEventListener('click', (event) => {
    event.preventDefault();
    createInventoryGrid();
});

// Make function that creates the inventory grid
const inventorySpaces = 28;

function createInventoryGrid() {
    let inventoryDiv = document.createElement('div');
    inventoryDiv.style.width = '50vw';
    inventoryDiv.style.margin = '5px';
    inventoryDiv.style.padding = '16px';
    inventoryDiv.style.borderTop = '6px solid black';
    inventoryDiv.style.backgroundColor = '#232a35';
    inventoryDiv.style.display = 'flex';
    inventoryDiv.style.justifyContent = 'center';
    inventoryDiv.style.flexWrap = 'wrap';
    inventoryDiv.style.alignItems = 'center';
    inventoryDiv.style.gap = '1rem';

    // Header
    mainHeader.innerHTML = '<h3>Inventory</h3>';
   
     // Append header directly to mainContainer

    // Create inventory spaces
    for (let i = 0; i < inventorySpaces; i++) {
        let inventorySpace = document.createElement('div');
        inventorySpace.style.width = '60px';
        inventorySpace.style.height = '60px';
        inventorySpace.style.display = 'flex';
        inventorySpace.style.flexDirection = 'column';
        inventorySpace.style.border = 'black 2px solid';
        inventoryDiv.appendChild(inventorySpace);
    }

    mainContainer.appendChild(inventoryDiv); // Append inventory grid directly to mainContainer
}
