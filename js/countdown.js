function atualizarCountdown() {
    const agora = new Date().getTime();
    const proximoGP = resultados2026.find(gp => new Date(gp.data).getTime() > agora);
    const container = document.getElementById("countdown-container");

    if (!container) return;

    if (!proximoGP) {
        container.innerHTML = "Temporada Finalizada!";
        return;
    }

    const dataEvento = new Date(proximoGP.data).getTime();
    const dif = dataEvento - agora;

    const d = Math.floor(dif / (1000 * 60 * 60 * 24));
    const h = Math.floor((dif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((dif % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((dif % (1000 * 60)) / 1000);

    container.innerHTML = `
        <div style="font-size: 0.8rem; text-transform: uppercase;">Próximo: ${proximoGP.gp}</div>
        <div style="font-size: 1.2rem; font-weight: bold; color: #e10600;">
            ${d}d ${h}h ${m}m ${s}s
        </div>
    `;
}
setInterval(atualizarCountdown, 1000);
atualizarCountdown();
