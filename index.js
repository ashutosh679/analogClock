let display = document.getElementById('digital');
let date = document.getElementById('date')

setInterval(() => {
let d = new Date();
let h = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds();

    hours = 30*h + m/2 ; 
    minutes = 6*m ;
    seconds = 6*s ;

    hour.style.transform = `rotate(${hours}deg)`;
    minute.style.transform = `rotate(${minutes}deg)`;
    second.style.transform = `rotate(${seconds}deg)`;

   let time = h +':'+m+':'+s ;
    display.innerText = time ;
    let month = d.getMonth() + 1;
    date.innerHTML = d.getDate() + '/' + month + '/' + d.getFullYear();

},1000);

