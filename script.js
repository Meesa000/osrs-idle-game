let mainContainer = document.querySelector('.main-container');
let tutorialLink = document.querySelector('#tutorial-link');

tutorialLink.addEventListener('click', (event) => {
    event.preventDefault();
    createTutorialContent();
});

function createTutorialContent (){

    

    let tutorialDiv = document.createElement('div');
    tutorialDiv.style.width = '50vw';
    tutorialDiv.style.height = '15vh';
    tutorialDiv.style.margin = '16px';
    tutorialDiv.style.padding = '16px';
    tutorialDiv.style.border = '2px solid black'
    tutorialDiv.style.backgroundColor = '#232a35';
    tutorialDiv.textContent = 'This is the tutorial content.';
    
    mainContainer.appendChild(tutorialDiv);
}



// create tutorial div and append to main containerssss

// create content inside tutorial div, and append it to tutorialdiv 