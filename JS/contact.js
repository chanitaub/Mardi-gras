document.getElementById('btn').addEventListener('click',function(){
    const fname=document.getElementById('fname');
    const error1=document.getElementById('error1');
   const lname=document.getElementById('lname');
    const error2=document.getElementById('error2'); 
    const email=document.getElementById('email');
    const error3=document.getElementById('error3'); 
    const number=document.getElementById('number');
    const error4=document.getElementById('error4');
    if(fname.value== ""){
        error1.innerHTML=' * pleace enter your name!';
       error1.style.color='red';
       /* fname.focus(); */
    } else{
        error1.innerHTML='';
    }
    if(lname.value== ""){
        error2.innerHTML=' * pleace enter your  last name!';
       error2.style.color='red';
       fname.focus();
    } else{
        error2.innerHTML='';
    }

   if(email.value== "" || email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        error3.innerHTML=  ' * this is not a valid email!';
        error3.style.color='red';
    } else{
        error3.innerHTML='';
    } 
    if(number.value==""||number.value.indexOf ('05')==-1){
        error4.innerHTML='* this is not a valid phone number!'
         error4.style.color='red';
    }else{
       error4.innerHTML='';  
    }
 

});