const toggle=document.getElementById('toggle');
toggle.addEventListener('change',function(){
    if(this.checked){
        document.documentElement.style.setProperty('--bg-color','#000000');
        document.documentElement.style.setProperty('--keypad-color','#E90074');  
    }
    else{
        document.documentElement.style.setProperty('--bg-color','hsl(60, 15%, 90%)');
        document.documentElement.style.setProperty('--keypad-color','#9a73d9');  
    }
});

let result=document.getElementById('result');
function append(value){
    result.value+=value;
    playback();
}



function backspace(){
    if(result.value=='Error'){
        result.value='';
    }
  result.value=result.value.slice(0,-1);
  playback();
}
function ac(){
    result.value='';
    playback();
}
function calc(){
    try{
        if(result.value==''){
            result.value='0';
        }
result.value=eval(result.value);
    }
    catch(e){
        result.value='Error';
    }
    playback();
}
function playback(){
    const buttonsound=document.getElementById('buttonclick');
    buttonsound.currentTime=0;
    buttonsound.play();
}