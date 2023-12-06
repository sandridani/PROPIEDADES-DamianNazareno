///const { format } = require("express/lib/response");

 
const btn = document.getElementById('button');

document.getElementById('form')
.addEventListener('submit', function(event) {
   event.preventDefault(); // Evita el envío estándar del formulario

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_945g7ot';

   // Envía el formulario a través de EmailJS
   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = "Correo electrónico enviado con éxito";
      alert('Enviado!');

    }, (err) => {
      btn.value = 'Enviando mail';
      alert(JSON.stringify(err));
    });
    
    //alert('Enviado!');
    function limpiarFormulario() {
      document.getElementById('form').reset();
      formulario.reset();
    };

    limpiarFormulario();


});


 
   

