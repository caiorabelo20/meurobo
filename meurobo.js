const
    url = "https://api2.minhablaze.com.br/api/v1/result/double"
var
    lem = (el) => {
        return document.querySelector(el)
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
                casa = 15
                tamanho = resultados.length
                indice = tamanho - casa
                cor = resultados[indice].color
                //converter valores das cores
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
                lem('.sugestao').innerHTML = "SUGESTÃO PARA:" = cor
            }
        )
        setTimeout(() => { startRobo() }, 3000)
    }

startRobo()