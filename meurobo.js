const
    url = "https://api2.minhablaze.com.br/api/v1/result/double"
var
    aux = 1
apostando = 0
acerto1 = 0
acerto2 = 0
acerto1_branco = 0
acerto2_branco = 0
perdas = 0
estrategia_branco = 0
lem = (el) => {
    return document.querySelector(el);
},
    sugestao = lem('.sugestao'),
    startRobo = () => {

        //inicio da nosa Fetch API
        fetch(
            url,
            {
                method: "GET"
            }
        ).then(
            response => response.json()
        ).then(
            //Inicio das funcoes do robo
            (r) => {
                resultados = r.results
                tamanho = resultados.length - 1
                dados = resultados.color
                analise_branco1p = 0
                analise_branco1p_protecao = 0
                analise_branco2p = 0
                analise_branco2p_protecao = 0
                branco_loss = 0
                analise_tbt1p = 0
                analise_tbt1p_protecao = 0
                analise_tbt2p = 0
                analise_tbt2p_protecao = 0
                tbt_loss = 0
                analise_alternador1p = 0
                analise_alternador1p_protecao = 0
                analise_alternador2p = 0
                analise_alternador2p_protecao = 0
                alternador_loss = 0
                for(i=0;i<=(tamanho - 3);i++){
                    //branco
                    if((resultados[i].color == 0) && (resultados[(i+1)].color != 0)){
                        if (resultados[(i+1)].color == 1) {
                            if(resultados[(i+2)].color == 2){
                                analise_branco1p = analise_branco1p + 1
                            }else if(resultados[(i+2)].color == 0){
                                analise_branco1p_protecao = analise_branco1p_protecao + 1
                            }else{
                                if(resultados[(i+3)].color==2){
                                    analise_branco2p = analise_branco2p + 1
                                }else if(resultados[(i+3)].color==0){
                                    analise_branco2p_protecao = analise_branco2p_protecao + 1
                                }else{
                                    branco_loss = branco_loss + 1
                                }
                            }
                        }else if (resultados[(i+1)].color == 2) {
                            if(resultados[(i+2)].color == 1){
                                analise_branco1p = analise_branco1p + 1
                            }else if(resultados[(i+2)].color == 0){
                                analise_branco1p_protecao = analise_branco1p_protecao + 1
                            }else{
                                if(resultados[(i+3)].color==1){
                                    analise_branco2p = analise_branco2p + 1
                                }else if(resultados[(i+3)].color==0){
                                    analise_branco2p_protecao = analise_branco2p_protecao + 1
                                }else{
                                    branco_loss = branco_loss + 1
                                }
                            }
                        }
                    }
                    // tbt
                    if(i<=(tamanho - 6) && resultados[(i+4)].color != resultados[(i+3)].color && resultados[(i+4)].color != 0 && (resultados[(i+3)].color == resultados[(i+2)].color && resultados[(i+2)].color == resultados[(i+1)].color && resultados[(i+1)].color == resultados[(i)].color)){
                        if(resultados[(i+3)].color == 1){
                            if(resultados[(i+5)].color == 1){
                                analise_tbt1p = analise_tbt1p + 1
                            }else if(resultados[(i+5)].color == 0){
                                analise_tbt1p_protecao = analise_tbt1p_protecao + 1
                            }else{
                                if(resultados[(i+6)].color==1){
                                    analise_tbt2p = analise_tbt2p + 1
                                }else if(resultados[(i+6)].color==0){
                                    analise_tbt2p_protecao = analise_tbt2p_protecao + 1
                                }else{
                                    tbt_loss = tbt_loss + 1
                                }
                            }
                        }else if(resultados[(i+3)].color == 2){
                            if(resultados[(i+5)].color == 2){
                                analise_tbt1p = analise_tbt1p + 1
                            }else if(resultados[(i+5)].color == 0){
                                analise_tbt1p_protecao = analise_tbt1p_protecao + 1
                            }else{
                                if(resultados[(i+6)].color==2){
                                    analise_tbt2p = analise_tbt2p + 1
                                }else if(resultados[(i+6)].color==0){
                                    analise_tbt2p_protecao = analise_tbt2p_protecao + 1
                                }else{
                                    tbt_loss = tbt_loss + 1
                                }
                            }
                        }
                    }
                    // quebra de alternancia
                    if (i <= (tamanho-6) && (resultados[(i+4)].color != 0) && (resultados[i+4].color == resultados[(i+3)].color && resultados[(i+3)].color == resultados[(i+1)].color) && (resultados[(i+2)].color == resultados[(i)].color) && (resultados[(i)].color != resultados[(i+1)].color)) {
                        if(resultados[(i+2)].color == 1){
                            if (resultados[(i + 5)].color == 1) {
                                analise_alternador1p = analise_alternador1p + 1
                            } else if (resultados[(i + 5)].color == 0) {
                                analise_alternador1p_protecao = analise_alternador1p_protecao + 1
                            } else {
                                if (resultados[(i + 6)].color == 1) {
                                    analise_alternador2p = analise_alternador2p + 1
                                } else if (resultados[(i + 6)].color == 0) {
                                    analise_alternador2p_protecao = analise_alternador2p_protecao + 1
                                } else {
                                    alternador_loss = alternador_loss + 1
                                }
                            }
                        }else if(resultados[(i+2)].color == 2){
                            if (resultados[(i + 5)].color == 2) {
                                analise_alternador1p = analise_alternador1p + 1
                            } else if (resultados[(i + 5)].color == 0) {
                                analise_alternador1p_protecao = analise_alternador1p_protecao + 1
                            } else {
                                if (resultados[(i + 6)].color == 2) {
                                    analise_alternador2p = analise_alternador2p + 1
                                } else if (resultados[(i + 6)].color == 0) {
                                    analise_alternador2p_protecao = analise_alternador2p_protecao + 1
                                } else {
                                    alternador_loss = alternador_loss + 1
                                }
                            }
                        }
                    }
                }
                if(apostando == 1 && id_aposta1 != resultados[tamanho].id){
                    // entra nesse if quando a jogada 1 foi realizada
                    if(num_cor == resultados[tamanho].color){
                        acerto1 = acerto1 + 1
                        apostando = 0
                    }else if(resultados[tamanho].color == 0){
                        acerto1_branco = acerto1_branco + 1
                        apostando = 0
                    }else{
                        apostando = 2
                        id_aposta2 = resultados[tamanho].id
                    }
                }else if(apostando == 2 && id_aposta2 == resultados[tamanho].id){
                    //entra nesse if caso a jogada 1 der errado e permanece nele ate que a jogada 2 seja realizada, nota-se que aqui nao se altera nenhum valor, ou seja, a cor apostada na jogada 1 e mantida
                    
                }else if(apostando == 2 && id_aposta2 != resultados[tamanho].id){
                    //entra nesse if quando a jogada 2 for realizada. Aqui a variavel "apostando" volta a ser zero, reiniciando o bot

                    if(num_cor == resultados[tamanho].color){
                        acerto2 = acerto2 + 1
                    }else if(resultados[tamanho].color == 0){
                        acerto2_branco = acerto2_branco + 1
                        apostando = 0
                    }else{
                        perdas = perdas + 1
                    }
                        apostando = 0                 
                }else if ((resultados[(tamanho - 1)].color == 0) && (resultados[(tamanho)].color != 0)) {
                    // Estrategia da cor branca
                    apostando = 1
                    id_aposta1 = resultados[tamanho].id
                    if (resultados[(tamanho)].color == 1) {
                        num_cor = 2
                    } else {
                        num_cor = 1
                    }
                //converter valores das cores
                    switch (num_cor) {
                        case 1:
                            cor = 'VERMELHO'
                            break
                        case 2:
                            cor = 'PRETO'
                            break
                        case 0:
                            cor = 'BRANCO'
                            break
                    }
                }else if (resultados[tamanho].color != resultados[(tamanho - 1)].color && resultados[tamanho].color != 0 && (resultados[(tamanho - 1)].color == resultados[(tamanho - 2)].color && resultados[(tamanho - 2)].color == resultados[(tamanho - 3)].color && resultados[(tamanho - 3)].color == resultados[(tamanho - 4)].color)) {
                    // Estrategia sequencia de 4 ou mais da mesma cor
                    apostando = 1
                    id_aposta1 = resultados[tamanho].id
                    num_cor = resultados[(tamanho - 1)].color
                //converter valores das cores
                    switch (num_cor) {
                        case 1:
                            cor = 'VERMELHO'
                            break
                        case 2:
                            cor = 'PRETO'
                            break
                        case 0:
                            cor = 'BRANCO'
                            break
                    }
                }else if ((resultados[tamanho].color != 0) && (resultados[tamanho].color == resultados[(tamanho - 1)].color && resultados[(tamanho - 1)].color == resultados[(tamanho - 3)].color) && (resultados[(tamanho - 2)].color == resultados[(tamanho - 4)].color) && (resultados[(tamanho - 1)].color != resultados[(tamanho - 2)].color)) {
                    // Estrategia quebra de alternancia de 4 ou mais amostras
                    apostando = 1
                    id_aposta1 = resultados[tamanho].id
                    num_cor = resultados[(tamanho - 2)].color
                //converter valores das cores
                    switch (num_cor) {
                        case 1:
                            cor = 'VERMELHO'
                            break
                        case 2:
                            cor = 'PRETO'
                            break
                        case 0:
                            cor = 'BRANCO'
                            break
                    }
                }else {
                    cor = 'Nada'
                }
                
                
                lem('.sugestao').innerHTML = ["Aposte em: "+ cor + "<br>Aposta: "+ apostando+ "<br>Acertos de primeira: "+ acerto1+ "<br>Acertos de segunda: "+ acerto2 + "<br>Acertos branco de primeira: "+ acerto1_branco+ "<br>Acertos branco de segunda: "+ acerto2_branco + "<br>Perdas: "+ perdas]
 //                 lem('.sugestao').innerHTML = [ "Branco Principal: ",analise_branco1p, "Branco1 proteçao: ",analise_branco1p_protecao,"Branco Gale: ",analise_branco2p,"Branco Gale proteçao: ", analise_branco2p_protecao,"Branco Loss: ",branco_loss]
 //                 lem('.sugestao').innerHTML = [ "TBT Principal: ",analise_tbt1p, "TBT1 proteçao: ",analise_tbt1p_protecao,"TBT Gale: ",analise_tbt2p,"TBT Gale proteçao: ", analise_tbt2p_protecao,"TBT Loss: ",tbt_loss]
 //                 lem('.sugestao').innerHTML = [ "Alternador Principal:" + analise_alternador1p + "<br>Alternador1 proteçao: " + analise_alternador1p_protecao + "<br>Alternador Gale: " + analise_alternador2p + "<br>Alternador Gale proteçao: " + analise_alternador2p_protecao + "<br>Alternador Loss: " + alternador_loss]
//                  lem('.sugestao').innerHTML = [a]
            }
        )
        setTimeout(() => { startRobo() }, 3000)
    }

startRobo()











//                if (estrategia == 1) {
//                    if (cor_num == resultados[(tamanho)].color) {
//                        acerto = 1
//                        estrategia_branco = 0
//                        estrategia = 0
//                    } else {
//                        acerto = 0
//                    }
//                }


//                    if (estrategia_branco == 0) {
//                        if (resultados[(tamanho)].color == 1) {
//                           cor = 2
//                        } else {
//                            cor = 1
//                        }












