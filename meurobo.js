const
    url = "https://api2.minhablaze.com.br/api/v1/result/double"
var
    aux = 1
apostando = 0
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
                    if(num_cor == resultados[tamanho].color){
                        acerto = 1
                        apostando = 0
                    }else{
                        acerto = 0
                    apostando = 2
                    id_aposta2 = resultados[tamanho].id
                }else if(apostando == 2 && id_aposta2 != resultados[tamanho].id){

                }else if ((resultados[(tamanho - 1)].color == 1) && (resultados[(tamanho)].color != 1)) {
                    apostando = 1
                    id_aposta1 = resultados[tamanho].id
                    if (resultados[(tamanho - 1)].color == 0) {
                        num_cor = 2
                    } else {
                        num_cor = 0
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
                } else {
                    cor = 'Nada'
                }
                lem('.sugestao').innerHTML = apostando
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