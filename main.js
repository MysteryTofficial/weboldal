function displayTime(){
    var dateTime = new Date(); 
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('sessions');

    if(hrs >= 12) {
         session.innerHTML = "du."; 
    }
    
    else {
        session.innerHTML = "de.";   
    }

    document.getElementById('hours').innerHTML = hrs; 
    document.getElementById('minutes').innerHTML = min; 
    document.getElementById('seconds').innerHTML = sec;
    
}
setInterval(displayTime, 10);