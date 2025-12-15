let nombre = "Juan Topo";
const salarioBase = 50000;
let anosDeServicio = 7;
let ventasAnuales = 20000;

let factorAntiguedad; 

if (anosDeServicio <5) {
    factorAntiguedad = 0.05;
}
else if (anosDeServicio >=5 && anosDeServicio <=10) {
    factorAntiguedad = 0.10;
}
else {
    factorAntiguedad = 0.15;
}

console.log("Factor de Antigüedad: " + factorAntiguedad);


let BonoRendimiento;
let RangoVentas;

if (ventasAnuales >= 10000) {  
    RangoVentas = "alto";
}
else if (ventasAnuales >= 5000 && ventasAnuales < 10000) {
    RangoVentas = "medio";
}
else {
    RangoVentas = "bajo";
}


switch (RangoVentas) {

    case "alto":
        BonoRendimiento = 500;
        break;
    case "medio":
        BonoRendimiento = 200;
        break;
    case "bajo":
        BonoRendimiento = 100;
        break;
    default:
        BonoRendimiento = 50;
        break;
    }
console.log("Bono de Rendimiento: " + BonoRendimiento);