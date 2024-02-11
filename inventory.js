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

    const inventoryArray = [];
    for (let i = 0; i < inventorySpaces; i++) {
        let inventorySpace = document.createElement('div');
        inventorySpace.style.width = '60px';
        inventorySpace.style.height = '60px';
        inventorySpace.style.display = 'flex';
        inventorySpace.style.flexDirection = 'column';
        inventorySpace.style.border = 'black 2px solid';
        inventorySpace.className = 'space'+i;

        inventoryDiv.appendChild(inventorySpace);
        inventoryArray.push(inventorySpace);
    }
    console.log(inventoryArray);
    

    

    // event listener to add img to bank
    const space0 = document.querySelector('.space0');
    if (space0) {
        space0.addEventListener('click', event => {
            addBank();
        });
    } else {
        console.error('Element with class .space0 not found in the DOM.');
    }


    // Header
    mainHeader.innerHTML = '<h3>Inventory</h3>';
   
     // Append header directly to mainContainer

    
    // Create inventory spaces
    
    // adds img to bank square
   function addBank () {
    let imgElement = document.createElement('img');
    imgElement.src = 'images/normal-logs.webp';
    let space0 = document.querySelector('.space0');
    space0.appendChild(imgElement);
   }

    mainContainer.appendChild(inventoryDiv); // Append inventory grid directly to mainContainer
}
