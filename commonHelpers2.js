import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const t={email:"",message:""},o=document.querySelector(".feedback-form"),l=document.querySelector(".feedback-form > label > input"),r=document.querySelector(".feedback-form > label > textarea"),a=localStorage.getItem("feedback-form-state");if(a){const e=JSON.parse(a);l.value=e.email,r.value=e.message}o.addEventListener("input",e=>{const{name:s,value:m}=e.target;t[s]=m,localStorage.setItem("feedback-form-state",JSON.stringify(t))});o.addEventListener("submit",e=>{e.preventDefault(),t.email.trim()===""||t.message.trim()===""?alert("Fill please all fields"):(console.log(t),localStorage.removeItem("feedback-form-state"),l.value="",r.value="")});
//# sourceMappingURL=commonHelpers2.js.map