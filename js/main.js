var countDownDate = new Date(document.querySelector('.timer').getAttribute('data-time')).getTime();
const daySpan = document.querySelector('.day .number');
const hoursSpan = document.querySelector('.hours .number');
const minutesSpan = document.querySelector('.minutes .number');
const secondsSpan = document.querySelector('.seconds .number');



const setTimer = () => {
    var now = new Date().getTime();

    if(now > countDownDate){
        document.querySelector('.timer').style.opacity = 0;
    }else{
        var timeleft = countDownDate - now;
        
        var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    
        if(days < 10){
            daySpan.textContent = '0' + days;
        }else{
            daySpan.textContent = days; 
        }
    
        if(hours < 10){
            hoursSpan.textContent = '0' + hours;
        }else{
            hoursSpan.textContent = hours; 
        }
    
        if(minutes < 10){
            minutesSpan.textContent = '0' + minutes;
        }else{
            minutesSpan.textContent =  minutes; 
        }
    
        if(seconds < 10){
            secondsSpan.textContent = '0' + seconds;
        }else{
            secondsSpan.textContent =  seconds; 
        }
    }
   
}



var timer = setInterval(function() {
    setTimer();

}, 1000)

setTimer();


new Accordion('.accordion-container');


document.querySelector('.copy-link a').addEventListener('click', function(e){
    e.preventDefault();
    this.closest('.copy-link').classList.add('visible');
    setTimeout(() => {
        this.closest('.copy-link').classList.remove('visible');
    }, 2000)

    var copyText = document.querySelector(".copy-input");

    copyText.select();

    navigator.clipboard.writeText(copyText.value);

})

const frame = document.querySelector('.video iframe');
frame.style.display = 'none';
document.querySelector('.play-btn').addEventListener('click', function(){
    document.querySelector('.play-btn').style.display = 'none';
    document.querySelector('.preview').style.display = 'none';
    document.querySelector('.video iframe').style.display = 'block';
    frame.setAttribute('src', frame.getAttribute('src') + "&autoplay=1");
})
