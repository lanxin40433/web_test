// const text = document.querySelectorAll(".thePaths");
// const svg = document.createElement('svg')
// const tt = document.createElementNS('http://www.w3.org/2000/svg', 'text')


// for (let i = 0; i < text.length; i++){
//     console.log(`text number ${i} length is ${text[i].getTotalLength()}`);
// }

const lastWord = document.querySelector("#twenty-third");
const animation = document.querySelector(".animation");
lastWord.addEventListener("animationend", () => {
    animation.style = "transition: all 1s ease; opacity: 0; pointer-events:none;";
})