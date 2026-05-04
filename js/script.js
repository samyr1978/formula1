document.addEventListener("DOMContentLoaded", () => {
    const corpoPilotos = document.getElementById("corpo-tabela");
    const corpoConstrutores = document.getElementById("corpo-tabela-construtores");

    if (!corpoPilotos || !corpoConstrutores) return;

    let rankingPilotos = {};

    // 1. Processar Pontuação e Histórico de Posições
    resultados2026.forEach(etapa => {
        etapa.resultados.forEach(res => {
            if (!rankingPilotos[res.id]) {
                // Criamos o array 'posicoes' para guardar todos os resultados de GP
                rankingPilotos[res.id] = { ...dbPilotos[res.id], pontos: 0, posicoes: [] };
            }
            rankingPilotos[res.id].pontos += res.pontos;
            rankingPilotos[res.id].posicoes.push(res.posicao); // Guarda a posição da corrida
        });

        if (etapa.temSprint && etapa.sprint) {
            etapa.sprint.forEach(sp => {
                if (!rankingPilotos[sp.id]) {
                    rankingPilotos[sp.id] = { ...dbPilotos[sp.id], pontos: 0, posicoes: [] };
                }
                rankingPilotos[sp.id].pontos += sp.pontos;
                // Nota: Posição de Sprint não conta para desempate oficial da F1, apenas os pontos.
            });
        }
    });

    // 2. Ordenar com Critério de Desempate (Pontos > Vitórias > 2º lugares...)
    const listaPilotos = Object.values(rankingPilotos).sort((a, b) => {
        if (b.pontos !== a.pontos) return b.pontos - a.pontos;

        // Se pontos iguais, compara quem tem mais posições melhores (1º, depois 2º...)
        for (let i = 1; i <= 22; i++) {
            const countA = a.posicoes.filter(p => p === i).length;
            const countB = b.posicoes.filter(p => p === i).length;
            if (countB !== countA) return countB - countA;
        }
        return 0;
    });

    // 3. Processar Construtores (mantém a lógica anterior)
    let rankingEquipes = {};
    listaPilotos.forEach(p => {
        if (!rankingEquipes[p.equipe]) {
            rankingEquipes[p.equipe] = { nome: p.equipe, pontos: 0 };
        }
        rankingEquipes[p.equipe].pontos += p.pontos;
    });

    const listaEquipes = Object.values(rankingEquipes).sort((a, b) => b.pontos - a.pontos);

    // 4. Renderizar (seu código de template permanece o mesmo)
    corpoPilotos.innerHTML = listaPilotos.map((p, i) => `
        <tr>
            <td>${i + 1}º</td>
            <td><strong>${p.nome}</strong></td>
            <td>${p.pais}</td>
            <td>${p.equipe}</td>
            <td style="text-align: right; font-weight: bold;">${p.pontos}</td>
        </tr>
    `).join('');

    corpoConstrutores.innerHTML = listaEquipes.map((e, i) => `
        <tr>
            <td>${i + 1}º</td>
            <td><strong>${e.nome}</strong></td>
            <td style="text-align: right; font-weight: bold;">${e.pontos}</td>
        </tr>
    `).join('');
});
