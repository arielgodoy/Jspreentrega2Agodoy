// creo el Constructor de la clase Clima

const Clima = function(pais, ciudad, fecha, clima) {
    this.pais = pais;
    this.ciudad = ciudad;
    this.fecha = fecha;
    this.clima = clima;
}

// declaro las ciudades que tienen X clima para X fecha
let ciudad1 = new Clima("CHILE", "PUCON", "2023-07-31", "Min 6°, Max 16°, Nublado y chubascos");
let ciudad2 = new Clima("CHILE", "TEMUCO", "2023-07-31", "Min 7°, Max 17°, Parcialmente Nublado");
let ciudad3 = new Clima("CHILE", "VILLARICA", "2023-07-31", "Min 8°, Max 18°, nublado y brumoso");
let ciudad4 = new Clima("CHILE", "ANGOL", "2023-07-31", "Min 9°, Max 19°, Despejado y heladas");
let ciudad5 = new Clima("ARGENTINA", "JUNIN", "2023-07-31", "Min 6°, Max 16°, Nublado y chubascos");
let ciudad6 = new Clima("ARGENTINA", "BARILOCHE", "2023-07-31", "Min 7°, Max 17°, Parcialmente Nublado");
let ciudad7 = new Clima("ARGENTINA", "MENDOZA", "2023-07-31", "Min 8°, Max 18°, nublado y brumoso");
let ciudad8 = new Clima("ARGENTINA", "CORDOBA", "2023-07-31", "Min 9°, Max 19°, Despejado y heladas");


let pais = [ciudad1, ciudad2, ciudad3, ciudad4,ciudad5, ciudad6, ciudad7, ciudad8];

    // Obtener el elemento select del DOM y "llenarlo" dinamicamemte con JS
    const selectPais = document.getElementById("selectPais");    
    const ciudadesPorPais = {};    
    pais.forEach((ciudad) => {
      if (!ciudadesPorPais[ciudad.pais]) {
        ciudadesPorPais[ciudad.pais] = [];
      }
      ciudadesPorPais[ciudad.pais].push(ciudad.ciudad);
    });    
    for (const pais in ciudadesPorPais) {
      const option = document.createElement("option");
      option.textContent = pais;
      option.value = pais;
      selectPais.appendChild(option);
    }
// funcion del evento onclick()
function buscaciudad() {
    let inputCiudad = document.getElementById('inputCiu').value.toLowerCase();
    let ciudadEncontrada = pais.filter(ciudad => ciudad.ciudad.toLowerCase() === inputCiudad);
    
    if (ciudadEncontrada.length > 0) {
      mostrarInfoClima(ciudadEncontrada[0].clima);
    } else {
      mostrarInfoClima(); // PASO CLIMA EN BLANCO PARA INFORMAR VIA HTML QUE NO HAY INFO
    }
  }

  // sub funcion que muestra la info del clima asociada a la ciudad ingresada en el input del index.html
  function mostrarInfoClima(clima) {
    let infoClimaDiv = document.getElementById('infoClima');
    if (clima) {
      infoClimaDiv.innerHTML = "<h3>Información del Clima:</h3><p>" + clima + "</p>";
    } else {
      infoClimaDiv.innerHTML = "<H3>No se encontró información para la ciudad ingresada.</H3>";
    }
  }