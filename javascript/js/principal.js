var titulo = document.querySelector(".titulo");	
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente"); //escolhe todos os pacientes

for (var i = 0; i < pacientes.length; i++){ // loop para correr por todos os pacientes

		var paciente = pacientes[i];	
	var tdPeso = paciente.querySelector(".info-peso"); //seleciona peso
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura"); //seleciona altura
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc"); //selecionando a coluna do IMC

	var pesoEhValido = validaPeso(peso);
	var alturaEhValida = validaAltura(altura);

	if (!pesoEhValido){
		console.log("Peso inválido!");
		pesoEhValido = false;
		paciente.classList.add("paciente-invalido");
	}
	if (!alturaEhValida){
		console.log("Altura inválida!");
		alturaEhValida = false;
		paciente.classList.add("paciente-invalido");
	}

	if (alturaEhValida && pesoEhValido){
	var imc = calculaImc(peso, altura);
	tdImc.textContent = imc;
	}
}

function validaPeso(peso){

	if(peso >=0 && peso < 1000){
		return true;
	}
	else{
		return false;
	}
}

function validaAltura(altura){
	if(altura >=0 && altura <= 3.0){
		return true;
	}
	else{
		return false;
	}
}

function calculaImc(peso, altura){
	var imc = 0;
	imc = peso / (altura * altura);

	return imc.toFixed(2);
}
