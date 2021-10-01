const hour= document.getElementById('hr');
const minute= document.getElementById('min');
const second= document.getElementById('sec');

setInterval(()=>
{
      const date = new Date();
     hr=date.getHours()*30;
     min=date.getMinutes()*6;
     hr=date.getSeconds()*6;

    hour.style.transform=`rotate(${(hr)+(min/12)}deg)`;
    minute.style.transform=`rotate(${min}deg)`;
    second.style.transform=`rotate(${sec}deg)`;
},1000);