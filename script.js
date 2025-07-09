// Escuchar el evento submit del formulario
document.getElementById("miFormulario").addEventListener("submit", function(e) {
    e.preventDefault();
  
    // Tomar los nombres de asistentes llenados
    var asistentes = [
      document.getElementById("asistente1").value,
      document.getElementById("asistente2").value,
      document.getElementById("asistente3").value,
      document.getElementById("asistente4").value
    ].filter(nombre => nombre.trim() !== "").join(", ");
  
    // Armar el objeto con los datos a enviar
    var data = {
      asistentes: asistentes,
      correo: document.getElementById("correo").value,
      asistencia: document.getElementById("asistencia").value,
      mensaje: document.getElementById("mensaje").value
    };
  
    // Enviar los datos a un endpoint o Google App Script (aquí solo simulamos)
    // fetch("AQUI_TU_URL_WEBAPP", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: { "Content-Type": "application/json" }
    // })
  
    // Simulamos envío exitoso
    alert("✅ Confirmación enviada con éxito, ¡gracias!");
    window.location.href = "https://www.youtube.com/watch?v=tfymGjkZ81I";
  });
  





  // web dos

  // Espera a que el contenido esté cargado
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btnSubir");

  // Mostrar el botón al hacer scroll
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });

  // Al hacer clic, subir a la sección 1
  btn.addEventListener("click", function () {
    document.getElementById("seccion1").scrollIntoView({ behavior: "smooth" });
  });
});


// fin web 2 