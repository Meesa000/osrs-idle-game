let mainContainer = document.querySelector('.main-container');
let tutorialLink = document.querySelector('#tutorial-link');
let tutorialChopWoodBtn = document.querySelector('#tutorial-chop');
let counter = 0;


tutorialLink.addEventListener('click', (event) => {
    event.preventDefault();
    createTutorialContent();
});



// function startCounter (func, ms) {

//     setInterval(func, ms);
//     console.log('Counter: ' + counter);
//     counter++;
// }


function createTutorialContent (){

    // tutorial container
    let tutorialDiv = document.createElement('div');
    tutorialDiv.style.width = '50vw';
    tutorialDiv.style.margin = '16px';
    tutorialDiv.style.padding = '16px';
    tutorialDiv.style.borderTop = '6px solid black';
    tutorialDiv.style.backgroundColor = '#232a35';
    tutorialDiv.style.display = 'flex';
    tutorialDiv.style.flexDirection = 'column';
    tutorialDiv.style.alignItems = 'center';
    tutorialDiv.style.gap = '2rem';


    // tutorial header
    let tutorialHeader = document.createElement('div');
    let text = tutorialHeader.innerHTML = '<h3>Tutorial Island</h3>';
    text = tutorialHeader.style.color = 'rgb(137, 95, 9)';
    tutorialHeader.style.whiteSpace = 'pre-line'; // or 'pre-wrap'
    tutorialHeader.style.textAlign = 'center';

    //tutorial description
    let tutorialDescription = document.createElement('div');
    tutorialDescription.innerHTML = 'Welcome to the OSRS idle tutorial island, chop three pieces of wood.'

    // chop button 
    let tutorialWcContent = document.createElement('div');
    let tutorialChopWoodBtn = document.createElement('button');
    tutorialChopWoodBtn.type = 'button';
    tutorialChopWoodBtn.id = 'tutorial-chop-btn';
    tutorialChopWoodBtn.innerHTML = 'Chop!';
    tutorialWcContent.appendChild(tutorialChopWoodBtn);
    tutorialChopWoodBtn.addEventListener('click', cutWood);
    

    // appends
    mainContainer.appendChild(tutorialDiv);
    tutorialDiv.appendChild(tutorialHeader);
    tutorialDiv.appendChild(tutorialDescription);
    tutorialDiv.appendChild(tutorialWcContent);

    return tutorialChopWoodBtn


}


function cutWood (){
    let normalCutRate = 1000; // ms
    window.setInterval(function(){
        console.log ('Cut: ' + counter);
        counter++;
        
    },1000);
    


}







