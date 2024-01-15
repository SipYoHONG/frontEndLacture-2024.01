function updateClock() {
    var currentTime = new Date();
    var year = currentTime.getFullYear();
    var month = currentTime.getMonth() + 1; 
    var day = currentTime.getDate();
    var week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; 
    var dayOfWeek = week[currentTime.getDay()]; 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

   
    month = (month < 10 ? "0" : "") + month;
    day = (day < 10 ? "0" : "") + day;
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;


    var clockText = year + "-" + month + "-" + day + " (" + dayOfWeek + ") " + hours + ":" + minutes + ":" + seconds;
    

    $("#clock").html(clockText);
  }


  setInterval(updateClock, 1000);


  updateClock();
