let mainContainer = document.querySelector('.main-container');
let tutorialLink = document.querySelector('#tutorial-link');
let tutorialChopWoodBtn = document.createElement('button');
let counter = 0;

tutorialLink.addEventListener('click', (event) => {
    event.preventDefault();
    tutorialDivStyles();
});


function logCounter (){
    let cutLog = true;

    let tutorialWcCounter = document.querySelector('#tutorial-wc-counter');

        if (cutLog){
            let intervalId = window.setInterval(function(){
                console.log ('Normal logs cut: ' + counter);
                counter++;
                tutorialWcCounter.innerHTML = 'Logs chopped: ' + counter;

                 if (counter === 4){
                    tutorialWcCounter.innerHTML = 'You have cut enough logs.';
                    cutLog = false;
                    clearInterval(intervalId);
                    tutorialChopWoodBtn.style.display = 'none';
                    if (tutorialChopWoodBtn.style.display = 'none'){
                        console.log('hidden');
                    }

                   
                }

        },1000);

    }
}


export function tutorialDivStyles (){

    // tutorial container properties
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

    // tutorial header properties
    let tutorialHeader = document.createElement('div');
    tutorialHeader.innerHTML = '<h3>Tutorial Island</h3>';
    tutorialHeader.style.color = 'rgb(137, 95, 9)';
    tutorialHeader.style.whiteSpace = 'pre-line'; // or 'pre-wrap'
    tutorialHeader.style.textAlign = 'center';

    // tutorial description properties
    let tutorialWelcomeMsg = document.createElement('div');
    tutorialWelcomeMsg.innerHTML = 'Welcome to the OSRS idle tutorial island, follow the instructions below.'
    
    // appends for tutorial div container
    mainContainer.appendChild(tutorialDiv);
    tutorialDiv.appendChild(tutorialHeader);
    tutorialDiv.appendChild(tutorialWelcomeMsg);
    
    // calls wcElements function which contains all elements relating to tutorial wcing (buttons etc)
    tutorialWcDiv(tutorialDiv);
    
}


export function tutorialWcDiv (parentElement) {
    // tutorial skill header - displays current skill as a header
    let skillNameHeader = document.createElement('div');
    skillNameHeader.innerHTML = '<h3>Woodcutting</h3>';
    skillNameHeader.style.color = 'rgb(137, 95, 9)';

    // tutorial skill description
    let skillDescription = document.createElement('div');
    skillDescription.innerHTML = 'First we will start with the woodcutting skill, click the chop button to start chopping wood. Chop 3 logs.';

    // chop counter
    let tutorialWcDiv = document.createElement('div');
    let tutorialWcCounter = document.createElement('span');

    // container div for chop button and log counter properties
    tutorialWcDiv.style.display = 'flex';
    tutorialWcDiv.style.gap = '1rem';

    // button properties
    tutorialChopWoodBtn.type = 'button';
    tutorialChopWoodBtn.id = 'tutorial-chop-btn';
    tutorialChopWoodBtn.innerHTML = 'Chop!';

    // wc counter properties
    tutorialWcCounter.innerHTML = '<span>Logs chopped: 0</span>';
    tutorialWcCounter.id = 'tutorial-wc-counter';
 
    // appends for wc div
    parentElement.appendChild(skillNameHeader);
    parentElement.appendChild(skillDescription);
    parentElement.appendChild(tutorialWcDiv);
    tutorialWcDiv.appendChild(tutorialChopWoodBtn);
    tutorialWcDiv.appendChild(tutorialWcCounter);
    tutorialChopWoodBtn.addEventListener('click', logCounter);
}
