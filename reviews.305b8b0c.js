const e=document.querySelector("#form"),t=document.querySelector('input[type="file"]');function n(e){const n=new FileReader,o=document.querySelectorAll(".file-img");n.onload=t=>{o[e].innerHTML=`<img src='${t.target.result}' alt='photo'/>`},n.readAsDataURL(t.files[e])}t.addEventListener("change",(function(){for(let e=0;e<t.files.length;e+=1)n(e)})),e.addEventListener("submit",(function(e){e.preventDefault()}));
//# sourceMappingURL=reviews.305b8b0c.js.map