console.table(autos);

const Datos_auto = {
  marca: "",
  year: "",
  minimo: "20000",
  maximo: "90000",
  puertas: "",
  transmision: "",
  color: "",
};

const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const min = document.querySelector("#minimo");
const max = document.querySelector("#maximo");
const doors = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

document.addEventListener("DOMContentLoaded", () => {
  marca.addEventListener("change", obtenerValor);
  year.addEventListener("change", obtenerValor);
  min.addEventListener("change", obtenerValor);
  max.addEventListener("change", obtenerValor);
  doors.addEventListener("change", obtenerValor);
  transmision.addEventListener("change", obtenerValor);
  color.addEventListener("change", obtenerValor);

  MostrarAutos();
  llenar_select();
});

const obtenerValor = (e) => {
  const nombre = e.target.id;
  const valor = e.target.value;

  Datos_auto[nombre] = valor;

  filtrarAuto();
};

function generar_year() {
  const year_now = Date.now;
  const year_last = year_now - 10;
}

const MostrarAutos = () => {
  const resultado = document.querySelector("#resultado");
  autos.forEach((auto) => {
    const { marca, modelo, year, precio, puertas, color, transmision } = auto;
    resultado.innerHTML += `
       <p> ${marca} ${modelo} - ${year} - ${puertas} puertas - transmision: ${transmision} - color : ${color} - precio : $ ${precio} <p/>
       `;
  });
};

 function llenar_select() {
    const max =new Date().getFullYear();
    const min = max - 10;
for (let i = max; i >= min; i--) {
    year.innerHTML += `
    <option value ="${i} ">  ${i}</option>
    `;
}
   
 }
//filtrado de los autos
const filtrarAuto = () => {
  const res = autos.filter(filtrado_marca).filter(filtrado_color).filter(filtrado_puertas).filter(filtrado_transmision).filter(filtrado_precio).filter(filtrado_year);
  console.table(res);
  if ( res.length) {
    const resultado  = document.querySelector("#resultado");
    resultado.innerHTML = "";
  res.forEach((auto) => {
      const { marca, modelo, year, precio, puertas, color, transmision } = auto;
      resultado.innerHTML += `
         <p> ${marca} ${modelo} - ${year} - ${puertas} puertas - transmision: ${transmision} - color : ${color} - precio : $ ${precio} <p/>
         `;
    });
  }else{
      console.log("error");  }
 

  
 
};

const filtrado_marca = (auto) => {
  if (Datos_auto.marca) {
    return auto.marca === Datos_auto.marca;
  }
  return auto;
};

const filtrado_puertas = (auto) => {
  if (Datos_auto.puertas) {
    return auto.puertas == parseInt(Datos_auto.puertas);
  }
  return auto;
};

const filtrado_transmision = (auto) => {
  if (Datos_auto.transmision) {
    return auto.transmision == Datos_auto.transmision;
  }
  return auto;
};
const filtrado_color = (auto) => {
  if (Datos_auto.color) {
    return auto.color == Datos_auto.color;
  }
  return auto;
};

const filtrado_precio = (auto) => {
 const minimo = parseInt(Datos_auto.minimo);
 const maximo  = parseInt(Datos_auto.maximo);

    return auto.precio >= minimo && auto.precio <= maximo;
  };

  const filtrado_year = (auto) => {
    if (Datos_auto.year) {
      return auto.year == Datos_auto.year;
    }
    return auto;
  };