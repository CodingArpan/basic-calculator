const typingpad = document.querySelectorAll('.typingpad > .numpad');
let val = document.getElementById('display').value;
typingpad.forEach((elem) => {
    elem.addEventListener('click', () => {
        val += elem.dataset.value;
        document.getElementById('display').value = val;
    })
});

const calculate = document.querySelector('.typingpad > .equal');
calculate.addEventListener('click', () => {
    let val = document.getElementById('display').value;
    let result = eval(val)
    document.getElementById('display').value = result;

})
const clearinput = document.querySelector('.typingpad > .clear');
clearinput.addEventListener('click', () => {

    document.getElementById('display').value = 0;
    val = ''
})
const delinput = document.querySelector('.typingpad > .delete');
delinput.addEventListener('click', () => {
    let valu = document.getElementById('display').value;

    document.getElementById('display').value = valu.slice(0, -1);
    val = valu.slice(0, -1);

})