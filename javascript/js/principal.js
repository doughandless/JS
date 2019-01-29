var titulo = document.querySelector(".titulo");	
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente"); //escolhe o primeiro paciente

for (var i = 0; i < pacientes.length; i++){

		var paciente = pacientes[i];	
	var tdPeso = paciente.querySelector(".info-peso"); //seleciona peso
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura"); //seleciona altura
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc"); //selecionando a coluna do IMC

	var pesoEhValido = true;
	var alturaEhValida = true;

	if (peso <= 0 || peso >= 1000 ){
		console.log("Peso inválido!");
		pesoEhValido = false;
		paciente.classList.add("paciente-invalido");
	}
	if (altura < 0 || altura > 3.00){
		console.log("Altura inválida!");
		alturaEhValida = false;
		paciente.classList.add("paciente-invalido");
	}

	if (alturaEhValida && pesoEhValido){
	var imc = peso / (altura * altura);
	tdImc.textContent = imc.toFixed(2);
	}
}
	var botaoAdicionar = document.querySelector("#adicionar-paciente");
	botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
});

