const
    url = "https://api2.minhablaze.com.br/api/v1/result/double"
var
aux = 1
estrategia = 0
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
                if (estrategia == 1) {
                    if (cor_num == resultados[(tamanho)].color) {
                        acerto = 1
                        estrategia_branco = 0
                        estrategia = 0
                    } else {
                        acerto = 0
                    }
                }
                if (((resultados[(tamanho - 1)].color == 0) && (resultados[(tamanho)].color != 0)) || estrategia_branco == 1) {
                    estrategia = 1
                    if (estrategia_branco == 0) {
                        if (resultados[(tamanho)].color == 1) {
                            cor = 2
                        } else {
                            cor = 1
                        }
                    }else{
                        if (resultados[(tamanho-1)].color == 1) {
                            cor = 2
                        } else {
                            cor = 1
                        }
                    }
                }
                cor_num = cor
                    // 
                    // Aplicar a logica de aposta (valor de cada aposta)
                    //
                //converter valores das cores
                if (estrategia == 1) {
                    switch (cor) {
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
                lem('.sugestao').innerHTML = aux
            }
        )
        setTimeout(() => { startRobo() }, 3000)
    }

startRobo()