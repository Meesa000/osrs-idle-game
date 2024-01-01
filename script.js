let mainContainer = document.querySelector('.main-container');
let tutorialLink = document.querySelector('#tutorial-link');
let logCounter = 0;


tutorialLink.addEventListener('click', (event) => {
    event.preventDefault();
    createTutorialDiv();
});


function createTutorialDiv (){

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
    tutorialDiv.style.gap = '1rem';

    // tutorial header
    let tutorialHeader = document.createElement('div');
    tutorialHeader.innerHTML = '<h3>Tutorial Island</h3>';
    tutorialHeader.style.color = 'rgb(137, 95, 9)';
    tutorialHeader.style.whiteSpace = 'pre-line'; // or 'pre-wrap'
    tutorialHeader.style.textAlign = 'center';

    // tutorial description
    let tutorialDescription = document.createElement('div');
    tutorialDescription.innerHTML = 'Welcome to the OSRS idle tutorial island, follow the instructions below.'

    // tutorial skill header - displays current skill as a header
    let skillHeader = document.createElement('div');
    skillHeader.innerHTML = '<h3>Woodcutting</h3>';
    skillHeader.style.color = 'rgb(137, 95, 9)';

    // tutorial skill description
    let skillDescription = document.createElement('div');
    skillDescription.innerHTML = 'First we will start with the woodcutting skill, click the chop button to start chopping wood. Chop 3 logs.';

    // chop button, chop counter
    let tutorialWcContent = document.createElement('div');
    let tutorialChopWoodBtn = document.createElement('button');
    let tutorialWcCounter = document.createElement('span');

    // container div for chop button and log counter properties
    tutorialWcContent.style.display = 'flex';
    tutorialWcContent.style.gap = '1rem';

    // button properties
    tutorialChopWoodBtn.type = 'button';
    tutorialChopWoodBtn.id = 'tutorial-chop-btn';
    tutorialChopWoodBtn.innerHTML = 'Chop!';

    // wc counter properties
    tutorialWcCounter.innerHTML = '<span>Logs chopped: 0</span>';
    tutorialWcCounter.id = 'tutorial-wc-counter';
 
    // appends for wc div
    tutorialWcContent.appendChild(tutorialChopWoodBtn);
    tutorialWcContent.appendChild(tutorialWcCounter);
    
    tutorialChopWoodBtn.addEventListener('click', tutorialCutTree);
    
    // appends for tutorial div container - contains all tutorial content
    mainContainer.appendChild(tutorialDiv);
    tutorialDiv.appendChild(tutorialHeader);
    tutorialDiv.appendChild(tutorialDescription);
    tutorialDiv.appendChild(skillHeader);
    tutorialDiv.appendChild(skillDescription);
    tutorialDiv.appendChild(tutorialWcContent);

}

// wc rate for cutting tutorial tree
function tutorialCutTree (){
    let tutorialWcCounter = document.querySelector('#tutorial-wc-counter');
    console.log(tutorialWcCounter);
    window.setInterval(function(){
        console.log ('Normal logs cut: ' + logCounter);
        logCounter++;
        tutorialWcCounter.innerHTML = 'Logs chopped: ' + logCounter;

        
    },1000);
    

}







