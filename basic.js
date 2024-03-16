let body=document.querySelector("body")
let btn=document.querySelector('.btn')


function SKF(){}
function clickHandler(){}


window.addEventListener("scroll",debounce(SKF,1000))

function debounce(fun,delay){
    let id;
    return function(){
        clearInterval(id);
        id=setTimeout(()=>{
            fun();
        },1000);
    }
}


btn.addEventListener('click',throttling(clickHandler,2000));

function throttling(fun,delay){
    let initial=0;
    return function(){
        if(new Date().getTime()-initial>=delay){
            initial=new Date().getTime();
            fun();
        }
    }
}