var botaoAdicionar = document.querySelector("#adicionar-paciente");
	botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    // extraindo infos do form
    var paciente = obtemPaciente (form);

    //criando tds e trs
    var pacienteTr = montaTr(paciente);
    
    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        var mensagemErro = document.querySelector("#mensagem-erro");
        mensagemErro.textContent = erros;
        return;
    }
  
    // adiciona o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
    form.reset();
});

function obtemPaciente(form){
    var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dados, classe){
    var td = document.createElement("td");
    td.textContent = dados;
    td.classList.add(classe);
return td;
}

function validaPaciente(paciente){
    var erros = [];

    if (!validaPeso(paciente.peso)){
        erros.push("O peso é inválido")
    }
    if (!validaAltura(paciente.altura)) {
        erros.push("A altura é inválida")
    }
    return erros;
}