console.log("this is home js");

let divElm = document.createElement('div');
let val = localStorage.getItem('text');
let text = "";
if(val == null)
    text = document.createTextNode("This will become editable, when you double click on it.");
else
    text = document.createTextNode(val);
divElm.appendChild(text);
divElm.setAttribute('id', 'editDiv');
divElm.setAttribute('class', 'editDiv');
divElm.setAttribute('style', 'border:2px solid black; width:320px; margin:34px; padding:23px;');
console.log(divElm);
let container = document.querySelector(".content");
// console.log(container);
let first = document.getElementById("first");
// console.log(first);

// insert element before element with id first
container.insertBefore(divElm, first);


// add event listner to the div element
divElm.addEventListener('click', function(e){
    let noOfTextArea = document.getElementsByClassName("textArea").length;
    // console.log(noOfTextArea);
    if(noOfTextArea == 0){
    let html = divElm.innerHTML;
    divElm.innerHTML = `<textarea class="form-control textArea" id="textArea" rows="3">${html}</textarea>`;
    divElm.setAttribute('style', 'border:2px solid black; width:320px; margin:34px; padding:3px;');
    }

    // listen blur event in on clickout of text area 
    let textArea = document.getElementById("textArea");
    textArea.addEventListener('blur', function(){
        divElm.innerHTML = textArea.value;
        divElm.setAttribute('style', 'border:2px solid black; width:320px; margin:34px; padding:23px;');
        localStorage.setItem('text', textArea.value);
    });

});