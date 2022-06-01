const btn= "Machine is off"


// Add your code here
function word() {
if ( btn.textContent == "Machine is on") {
return btn.textContent = "Machine is off"
}

if (btn.textContent == "Machine is off") {
return btn.textContent = "Machine is on"
}
}

console.log(word)

btn.addEventListener('click', () => {
    if (btn.className === 'on') {
      btn.textContent = 'Machine is off';
      btn.className = "off";
    } else {
      btn.textContent = 'Machine is on';
      btn.className = "on";
    }
  });



// Add your code here
btn.addEventListener('click', () => {
    if ( btn.className === 'on') {
     btn.textContent = 'Machine is off';
btn.className = "off";
    }
    
    else {
    btn.textContent = 'Machine is on';
    btn.className = "on";
    }
    });

const btn = document.querySelector('button');