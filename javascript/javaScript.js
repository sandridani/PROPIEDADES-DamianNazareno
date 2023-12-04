// Configura EmailJS con tu usuario y plantilla de correo electrónico
emailjs.init("user_tuCodigoDeUsuario");

document.getElementById("miFormulario").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita el envío estándar del formulario

  // Obtiene los valores del formulario
  var formData = new FormData(event.target);
  var data = {};
  formData.forEach(function(value, key){
      data[key] = value;
  });

  // Envía el formulario a través de EmailJS
  emailjs.send("service_tuCodigoDeServicio", "template_tuCodigoDePlantilla", data)
    .then(function(response) {
      console.log("Correo electrónico enviado con éxito:", response);
    }, function(error) {
      console.log("Error al enviar el correo electrónico:", error);
    });
});

