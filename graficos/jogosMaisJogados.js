import { getCSS, tickConfig } from "./common.js";

async function jogosMaisJogados() {
    const url = './jogos-mais-jogados.json';
    const res = await fetch(url);
    const dados = await res.json();
    const nomesDosJogos = Object.keys(dados);
    const quantidadeDeJogadores = Object.values(dados);

    const data = [
        {
            x: nomesDosJogos,
            y: quantidadeDeJogadores,
            type: 'bar',
            marker: {
                color: getCSS('--secondary-color')
            }
        }
    ];

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Jogos Mais Jogados do Mundo',
            x: 0.05,
            font: {
                color: getCSS('--primary-color'),
                size: 30,
                family: getCSS('--font')
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Nome dos Jogos',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Milhões de Jogadores',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }
    };

    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('graficos-container').appendChild(grafico);
    Plotly.newPlot(grafico, data, layout);
}

document.addEventListener('DOMContentLoaded', () => {
    jogosMaisJogados();
});
