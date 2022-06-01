
/*document.addEventListener('DOMContentLoaded', () => {
    function createParagraph() {
      const para = document.createElement('p');
      para.textContent = 'You clicked the button!';
      document.body.appendChild(para);
    }
  
    const buttons = document.querySelectorAll('button');
  
    for (const button of buttons) {
      button.addEventListener('click', createParagraph);
    }
  });*/


const bxt = document.querySelector(".button");

function greet() {
  const nameAsk = prompt("what is your name");
  const nameGreat = alert(`welcome ${nameAsk}`);
}

bxt.addEventListener('click', greet);
