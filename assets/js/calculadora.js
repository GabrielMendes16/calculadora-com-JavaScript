function calculadora(){
    alert('Bem Vindo a Euclides sua calculadora!')
    const operacao = Number(prompt('Escolha a operação desejada:\n 1 - Soma\n 2 - Subtração\n 3 - Mutiplicação\n 4 - Divisão\n 5 - Descubra o resto da divisão\n 6 - Potenciação'));

    if(!operacao || operacao > 7){
        alert('Operação invalida!\nPor favor escolha uma alternativa válida.');
        calculadora();
    }else{
        let numeroInicial = Number(prompt('Informeo primeiro número desejado:'));
        let numeroSecundario = Number(prompt('Informe o segundo número desejao:'));
        let resultado;
    
        if(!numeroInicial || !numeroSecundario){
            alert('Digite apenas números por favor!')
            calculadora();
        }else{
            function soma(){
                resultado = numeroInicial + numeroSecundario;
                alert(`${numeroInicial} + ${numeroSecundario} = ${resultado}`)
                novaOperacacao();
            }
        
            function subtracao(){
                resultado = numeroInicial - numeroSecundario;
                alert(`${numeroInicial} - ${numeroSecundario} = ${resultado}`)
                novaOperacacao();
            }
        
            function mutiplicacao(){
                resultado = numeroInicial * numeroSecundario;
                alert(`${numeroInicial} * ${numeroSecundario} = ${resultado}`) 
                novaOperacacao();
            }
        
            function divisao(){
                resultado = numeroInicial / numeroSecundario;
                alert(`${numeroInicial} / ${numeroSecundario}  = ${resultado}`) 
                novaOperacacao();
        
            }
            function resto(){
                resultado = numeroInicial % numeroSecundario;
                alert(` O resto da divisão entre ${numeroInicial} e  ${numeroSecundario} tem como resultado: ${resultado}`) 
                novaOperacacao();
        
            }
            function potenciacao(){
                resultado = numeroInicial ** numeroSecundario;
                alert(` ${numeroInicial} elevado a  ${numeroSecundario} resulta em = ${resultado}`) 
                novaOperacacao();
            }
        
            function novaOperacacao(){
                let opcao = prompt('Deseja realizar outra operação?\n 1 - Sim\n 2 - Não');
                if(opcao == 1){
                    calculadora();
                }else if(opcao == 2){
                    alert('Foi um prazer, até breve!');
                }else{
                    alert('Digite uma opção valida, por favor!');
                    novaOperacacao();
                }
            }
    
            
        
    
        }
    
        if(operacao == 1){
        soma();
        }else if(operacao == 2){
        subtracao();
        }else if(operacao == 3){
        mutiplicacao();
        }else if(operacao == 4){
        divisao();
        }else if(operacao == 5){
        resto();
        }else if(operacao == 6){
        potenciacao();
    }
    
    }
    
    
    
    }
    
       calculadora();

