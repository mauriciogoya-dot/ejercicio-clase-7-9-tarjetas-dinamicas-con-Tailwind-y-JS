let arrayDeTarjetas = [
  {
    id: 1,
    titulo: "Técnico Superior en Desarrollo Web y Aplicaciones Digitales",
    cuerpo:
      "Esta es la descripción de Técnico Superior en Desarrollo Web y Aplicaciones Digitales.",
    imagen:
      "https://institutocalamuchita.com/wp-content/uploads/2023/09/inscrip_web_developer2-768x402.jpeg",
  },
  {
    id: 2,
    titulo: "Técnico Superior en Turismo",
    cuerpo: "Esta es la descripción de Técnico Superior en Turismo.",
    imagen:
      "https://www.bbva.com/wp-content/uploads/2020/12/turismo_sostenible-1024x629.jpg",
  },
  {
    id: 3,
    titulo: "Técnico Superior en Guía de Trekking",
    cuerpo: "Esta es la descripción de Técnico Superior en Guía de Trekking.",
    imagen:
      "https://institutocalamuchita.com/wp-content/uploads/2023/08/WhatsApp-Image-2022-06-09-at-1.28.48-PM-2-300x224.jpeg",
  },
];

let contenedor = document.getElementById("tarjetas");

// Función para renderizar las tarjetas dinámicamente
function mostrarTarjetas() {
  // Limpiamos el contenedor por seguridad
  contenedor.innerHTML = "";

  // Recorremos el array con un bucle (puede ser forEach o map)
  arrayDeTarjetas.forEach((tarjeta) => {
    // Creamos un elemento div para cada tarjeta aplicando clases de Tailwind
    let tarjetaDiv = document.createElement("div");
    tarjetaDiv.className =
      "bg-white rounded-xl shadow-md overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow";

    // Definimos la estructura interna usando template literals (``)
    tarjetaDiv.innerHTML = `
                    <img class="w-full h-48 object-cover" src="${tarjeta.imagen}" alt="${tarjeta.titulo}">
                    <div class="p-6 flex flex-col flex-grow">
                        <h2 class="text-xl font-bold text-slate-800 mb-2">${tarjeta.titulo}</h2>
                        <p class="text-slate-600 text-sm mb-4">${tarjeta.cuerpo}</p>
                    </div>
                `;

    // Añadimos la tarjeta creada al contenedor principal
    contenedor.appendChild(tarjetaDiv);
  });
}

// Ejecutamos la función al cargar la página
mostrarTarjetas();
