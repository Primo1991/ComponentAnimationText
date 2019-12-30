// Variable declaration
const text = document.querySelector(".fancy");
const textStr = text.textContent;
const splitText = textStr.split("");


// Remove text from h1 after dublicate it used by for loop
text.textContent = "";


// Looping after each element of textContent in order to add <span> in order to give them a class for change behavior of each elements
for(let i= 0; i < splitText.length; i++ ){
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

// Variables for trigering each element step by step
let char = 0;
let timer = setInterval(onTick, 250);


//Fucntion who add effect for each element
function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    
    // Checking for last element of text in order to finish that function
    if( char === splitText.length) {
        complete();
        return;
    }
}

// Fucntion for finish interval after reach last element of text
function complete() {
    clearInterval(timer)
    timer = null;
}
