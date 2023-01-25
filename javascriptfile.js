let str=""
let button=document.querySelectorAll('.btn');
Array.from(button).forEach((bvalue)=>{
    bvalue.addEventListener('click', (val)=>{

        if(val.target.innerHTML== "="){
            str=eval(str);
            document.querySelector('input').value=str;
            
        }
        else if(val.target.innerHTML== "AC"){
            str="";
            document.querySelector('input').value=str;
            
        }
        else{
            str=str + val.target.innerHTML;
            document.querySelector('input').value=str;

        }
        
       
        

    })

})
