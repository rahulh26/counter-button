count=0
function increment(){
    if(count<=10){
    document.getElementById('count').innerHTML=count++
    }
    if(count==11){
        document.getElementById('btn1').style.background='red'
        document.getElementById('count').disabled=true
    }
}
function decrease(){
    if(count>=1){
    document.getElementById('count').innerHTML=count--
    }
    if(count==10){
        document.getElementById('count').disabled=true
    }
    if(count<10){
        document.getElementById('btn1').style.background='rgb(2,132,82)'
        document.getElementById('count').disabled=false
    }



}
function reset(){
    document.getElementById('count').innerHTML=0
}