import colors from './data.js';
import refs from './refs.js';

const { body, btnStart, btnStop } = refs;
let interwalId = null;

const rememberColor = localStorage.getItem('bgColor')
if (rememberColor !== null) {
    body.setAttribute('style', rememberColor)
};

btnStart.addEventListener('click', onBtnStartClick);
btnStop.addEventListener('click', onBtnStopClic);


function onBtnStartClick(e) {
    e.target.disabled = true
  interwalId = setInterval(() => {
    const color = getRandomColor(randomIntegerFromInterval(0,5), colors)
    body.setAttribute('style', `background-color: ${color}`)
    }, 1000);

};
function onBtnStopClic() {
    btnStart.disabled = false
    clearInterval(interwalId)
    // body.removeAttribute('style')
    
    localStorage.setItem('bgColor', body.getAttribute('style'));
    };
function getRandomColor(clbRandomNumber, array) {
    const randomIndex = clbRandomNumber;
    return array.find((el, index, array) => index === randomIndex ? el : undefined)
};
function randomIntegerFromInterval(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
};
