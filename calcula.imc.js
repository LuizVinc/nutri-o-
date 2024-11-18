var titulo = document.querySelector("titulo");
titulo.textContent = "Nutrição";


var paciente = document.querySelector("#primeiro paciente");


var tdPeso = paciente.querySelector(".info-Peso");
var peso = tdPeso.textContent;


var tdAltura = paciente.querySelector(".info-altura");
var Altura = tdAltura.textContent;


var tdImc = paciente.querySelector(".Info-imc");


var pesoInvalido = true;
var alturaEnvalido = true;


tdImc.textContent =Imc;


if(peso < 0) {
  tdPeso.textContent = "Peso invalido";
}
tdImc.textContent = Imc;


if(peso > 600) {
 tdImc.textContent = "Peso invalido";
 pesoEnvalido = false;
} 


if(altura < 0 || altura > 2.00) {
  tdImc.textContent = "Altura inválida"
  alturaEnvalida = false;
}

if(pesoEnvalido && alturaEnvalida); {
  var Imc = peso / (altura * altura);
tdImc.textContent = Imc
}

varNomeTd.textContent = varNome;
pesoTd.textContent = peso;
alturaTd.textContent = altura;
gorduraTd.textContent = gordura;