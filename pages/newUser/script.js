const input = document.querySelector('#cpf');
input.addEventListener('keypress', () => {
   let inputLength = input.value.length;

   if (inputLength === 3 || inputLength === 7) {
        input.value += '.';
   } else if (inputLength === 11) {
        input.value += '-';
   }
});

function Rg(v){
    v=v.replace(/\D/g,"");
    v=v.replace(/(\d{2})(\d{3})(\d{3})(\d{1})$/,"$1.$2.$3-$4");
    return v;
}

const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }
  
  const phoneMask = (value) => {
    if (!value) return ""
        value = value.replace(/\D/g,'')
        value = value.replace(/(\d{2})(\d)/,"($1) $2")
        value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }

  document.addEventListener("DOMContentLoaded", function() {
     const menuSelect = document.getElementById("Menu");
     const form = document.querySelector(".table");
     
     menuSelect.addEventListener("change", function() {
         if (menuSelect.value === "1") {
             form.style.display = "block";
         } else {
             form.style.display = "none";
         }
     });
 });
 
 
 
 
 