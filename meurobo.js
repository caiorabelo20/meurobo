const
    url = "https://api2.minhablaze.com.br/api/v1/result/double"
var
    aux = 1
apostando = 0
acerto1 = 0
acerto2 = 0
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
                if(apostando == 1 && id_aposta1 != resultados[tamanho].id){
                    // entra nesse if quando a jogada 1 foi realizada
                    if(num_cor == resultados[tamanho].color){
                        acerto1 = 1
                        apostando = 0
                    }else{
                        acerto1 = 0
                        apostando = 2
                        id_aposta2 = resultados[tamanho].id
                    }
                }else if(apostando == 2 && id_aposta2 == resultados[tamanho].id){
                    //entra nesse if caso a jogada 1 der errado e permanece nele ate que a jogada 2 seja realizada, nota-se que aqui nao se altera nenhum valor, ou seja, a cor apostada na jogada 1 e mantida
                    
                }else if(apostando == 2 && id_aposta2 != resultados[tamanho].id){
                    //entra nesse if quando a jogada 2 for realizada. Aqui a variavel "apostando" volta a ser zero, reiniciando o bot

                    if(num_cor == resultados[tamanho].color){
                        acerto2 = 1
                    }else{
                        acerto2 = 0
                    }
                        apostando = 0                 
                }else if ((resultados[(tamanho - 1)].color == 0) && (resultados[(tamanho)].color != 0)) {
                    // Estrategia da cor branca
                    acerto1 = 0
                    acerto2 = 0
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
                }else if (resultados[tamanho].color != resultados[(tamanho - 1)].color && (resultados[(tamanho - 1)].color == resultados[(tamanho - 2)].color && resultados[(tamanho - 2)].color == resultados[(tamanho - 3)].color && resultados[(tamanho - 3)].color == resultados[(tamanho - 4)].color)) {
                    // Estrategia sequencia de 4 ou mais da mesma cor
                    acerto1 = 0
                    acerto2 = 0
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
                }else {
                    cor = 'Nada'
                }
                lem('.sugestao').innerHTML = [cor,apostando,acerto1,acerto2]
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