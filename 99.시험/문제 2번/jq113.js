function updateClock() {
    let currentTime = new Date();
    let year = currentTime.getFullYear();
    let month = currentTime.getMonth() + 1; 
    let day = currentTime.getDate();
    let week = ['일', '월', '화', '수', '목', '금', '토']; 
    let dayOfWeek = week[currentTime.getDay()]; 
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

   
    month = (month < 10 ? "0" : "") + month;
    day = (day < 10 ? "0" : "") + day;
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;


    let clockText = year + "-" + month + "-" + day + " (" + dayOfWeek + ") " + hours + ":" + minutes + ":" + seconds;
    

    $("#clock").html(clockText);
  }


  setInterval(updateClock, 1000);


  updateClock();
