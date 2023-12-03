
import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const email=document.querySelector('input[name="email"]');
const message= document.querySelector('textarea[name="message"]');

// cargar los datos existentes 

window.addEventListener("load", ()=>{

   const loady =JSON.parse(localStorage.getItem("feedback-form-state"));
   email.value = loady.email;
   message.value = loady.message;
})
 


form.addEventListener("submit", (event) =>{
        
        console.log("entro ");
        event.preventDefault();
        console.log(email.value + ":"+ message.value);
        localStorage.removeItem("feedback-form-state");
        email.value = "";
        message.value = "";
   
})

form.addEventListener("input", (event)=>{
        throttle(function (){

                const mensaje = {
                        "email": email.value,
                        "message": message.value
                };
               // console.log(mensaje);
                localStorage.setItem("feedback-form-state", JSON.stringify(mensaje))
                
        }, 500);
});

