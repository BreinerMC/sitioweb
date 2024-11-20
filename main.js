// Función para mostrar el formulario cuando se hace clic en un auto
function mostrarFormulario(auto) {
  // Ocultar el formulario de contacto y mostrar el formulario de compra
  let formularioContainer = document.getElementById('formulario-container');
  formularioContainer.style.display = 'block';
}

// Función para mostrar información dependiendo de la opción seleccionada en financiamiento
function mostrarInfo(opcion) {
  let infoDiv = document.getElementById('informacion');
  
  if (opcion === 'credito') {
      infoDiv.innerHTML = "<h3>Financiamiento a Crédito</h3><p>Te ofrecemos opciones de crédito con bajas tasas de interés. Solicita más detalles para conocer los plazos y requisitos.</p>";
  } else if (opcion === 'contado') {
      infoDiv.innerHTML = "<h3>Pago al Contado</h3><p>Si prefieres pagar al contado, te ofrecemos descuentos exclusivos en el precio final del vehículo.</p>";
  } else if (opcion === 'auto') {
      infoDiv.innerHTML = "<h3>Tomamos tu Auto como Medio de Pago</h3><p>Ofrecemos una evaluación de tu vehículo para poder descontar su valor del precio del auto que deseas comprar.</p>";
  }

  infoDiv.style.display = "block";
}

// Función para mostrar información dependiendo del servicio seleccionado
function mostrarServicio(servicio) {
  let detalleDiv = document.getElementById('detalle-servicio');
  
  if (servicio === 'revision') {
      detalleDiv.innerHTML = "<h3>Revisión Técnica</h3><p>Ofrecemos una revisión técnica completa para asegurarnos de que tu vehículo esté en perfectas condiciones antes de su venta o uso.</p>";
  } else if (servicio === 'seguros') {
      detalleDiv.innerHTML = "<h3>Seguros para Autos</h3><p>Brindamos una amplia variedad de opciones de seguros para vehículos, adaptados a tus necesidades.</p>";
  } else if (servicio === 'asesoria') {
      detalleDiv.innerHTML = "<h3>Asesoría Financiera</h3><p>Si necesitas ayuda para financiar tu auto, nuestros asesores financieros te guiarán para encontrar la mejor opción.</p>";
  }

  detalleDiv.style.display = "block";
}

// Función para manejar el envío del formulario
document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();

    // Mostrar mensaje de confirmación y limpiar el formulario
    document.getElementById('mensaje-confirmacion').style.display = 'block';
    document.getElementById('formulario').reset();
});
