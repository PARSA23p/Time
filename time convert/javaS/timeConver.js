const input = document.getElementById('input');
const btn = document.getElementById('BTN');
const p = document.querySelector('p');



btn.addEventListener('click' , ()=>{
    let d = input.valueAsDate;
    let newD = new persianDate(d).format('YYYY/MM/DD');
    p.innerHTML = newD
})

