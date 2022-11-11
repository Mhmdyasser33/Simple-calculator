let scr = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn")
let Delete = document.querySelector(".btn-clear");
let Equal = document.querySelector(".btn-equal");
console.log(Delete);
buttons.forEach((element)=>{
element.addEventListener('click',(e)=>{
    let output = e.target.dataset.val ;
    // store value that user entered in scren 
    scr.value += output ;
})
})
// equal function 
 Equal.addEventListener('click', (e)=>{
    if(scr.value ===''){
        scr.value = "";
    }
    else{
       let ans = eval(scr.value);
       scr.value = ans ;
    }
}) 
// delete function 
 Delete.addEventListener('click' , ()=>{
    scr.value = "";
})

