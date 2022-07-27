let sec = document.getElementById('sec');
let min = document.getElementById('min');
let hour = document.getElementById('hour');
let pTime = document.getElementById('time');


setInterval(clockHandler , 1000);

function clockHandler(){
    let d = new Date();
    let m = d.getMinutes();

sec.style.transform = `rotateZ(${d.getSeconds() * 6}deg)`;
min.style.transform = `rotateZ(${d.getMinutes() * 6}deg)`;
hour.style.transform = `rotateZ(${d.getHours() * 30 + m / 2}deg)`;
pTime.innerHTML = moment().format('HH : mm : ss a')
}
