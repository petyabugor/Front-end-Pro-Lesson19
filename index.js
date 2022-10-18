//1)
let btn = document.querySelector('.form-popup-btn1')
let btn2 = document.querySelector('.form-popup-btn2')
btn2.disabled = true
btn.addEventListener('click', disable)
btn.addEventListener('click', disableText)

function disable()
{
    if(btn2.disabled === true){
    btn2.disabled = false;
} else {
    btn2.disabled = true;   
}
}
function disableText()
{
    if(btn2.disabled === true){
    btn2.textContent = 'не активная'
} else {
    btn2.textContent = 'активная'  
}
}


//2)
let wrapper = document.querySelector('.wrapper')
wrapper.addEventListener('click', count)
wrapper.addEventListener('contextmenu', count)
let click = 0;
function count() {
    document.querySelector('.counts').innerHTML = ++click;
    click = click
}


//3)
let square = document.querySelector('.square')
square.addEventListener('mouseover', function () {
    square.style.cssText = `
    background: #7e0303;
    `
});
square.addEventListener('mouseout', function () {
    square.style.cssText = `
    background: #033050;
    `
})