// =======================================
// APP.JS – DASHBOARD 7ª GEE (VERSÃO FINAL)
// =======================================

document.addEventListener("DOMContentLoaded", () => {

  /* ================================
     ELEMENTOS DA TELA
  ================================ */
  const tabela = document.getElementById("detalhamento");
  const tbody = tabela?.querySelector("tbody");

  const filtroEscola   = document.getElementById("filterEscola");
  const filtroPrograma = document.getElementById("filterPrograma");
  const filtroExercicio = document.getElementById("filterExercicio");

  const btnAjuda = document.getElementById("btnAjuda");
  const modal = document.getElementById("modalAjuda");
  const fechar = document.getElementById("fecharModal");

  /* ================================
     VALIDAÇÃO
  ================================ */
  if (!tabela || !tbody || !filtroEscola || !filtroPrograma || !filtroExercicio) {
    console.error("❌ Erro: elementos obrigatórios não encontrados no DOM.");
    return;
  }

  /* ================================
     FUNÇÕES AUXILIARES
  ================================ */
  const unique = arr => [...new Set(arr)];

  function preencherSelect(select, valores) {
    select.innerHTML = `<option value="">Todos</option>`;
    valores.forEach(v => {
      const opt = document.createElement("option");
      opt.value = v;
      opt.textContent = v;
      select.appendChild(opt);
    });
  }

  function passaNosFiltros(r) {
    if (filtroEscola.value && r.escola !== filtroEscola.value) return false;
    if (filtroPrograma.value && r.programa !== filtroPrograma.value) return false;
    if (filtroExercicio.value && r.exercicio !== filtroExercicio.value) return false;
    return true;
  }

  function classeStatus(status) {
    return `status-${status}`;
  }

  /* ================================
     TABELA DETALHADA
  ================================ */
  function renderTabela() {
    tbody.innerHTML = "";

    const filtrados = registros.filter(passaNosFiltros);

    if (!filtrados.length) {
      tbody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align:center;font-style:italic;">
            Nenhum registro encontrado.
          </td>
        </tr>
      `;
      return;
    }

    filtrados.forEach(r => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${r.escola}</td>
        <td>${r.programa}</td>
        <td>${r.exercicio}</td>
        <td class="${classeStatus(r.status)}"><strong>${r.status}</strong></td>
        <td>${r.problema}</td>
        <td>${r.falta}</td>
        <td><strong>${r.prioridade}</strong></td>
      `;
      tbody.appendChild(tr);
    });
  }

  /* ================================
     MAPA GERAL
  ================================ */
  function nivelSeveridade(status) {
    if (status === "NA" || status === "ADD") return 3;
    if (status === "AP" || status === "EA") return 2;
    if (status === "A") return 1;
    return 0;
  }

  function consolidarStatus(escola, programa) {
    const lista = registros.filter(r => r.escola === escola && r.programa === programa);
    if (!lista.length) return "";

    return Math.max(...lista.map(r => nivelSeveridade(r.status)));
  }

  function gerarTooltip(escola, programa) {
    const lista = registros.filter(r => r.escola === escola && r.programa === programa);
    if (!lista.length) return "Sem registros.";

    const motivos = new Set();
    lista.forEach(r => {
      if (r.status === "NA") motivos.add("Prestação não apresentada");
      if (r.status === "ADD") motivos.add("Diligência com inconsistências");
      if (r.status === "AP" || r.status === "EA") motivos.add("Processo em análise");
    });

    return [...motivos].join(" • ");
  }

  function renderMapaGeral() {
    const tabelaMapa = document.getElementById("mapaGeral");
    if (!tabelaMapa) return;

    const tbodyMapa = tabelaMapa.querySelector("tbody");
    tbodyMapa.innerHTML = "";

    const escolas = unique(registros.map(r => r.escola));
    const programas = ["PDDE", "PNAE", "PEH", "PRA"];

    escolas.forEach(escola => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td class="map-escola" data-escola="${escola}"><strong>${escola}</strong></td>`;

      programas.forEach(p => {
        const nivel = consolidarStatus(escola, p);
        const cor = nivel === 3 ? "🔴" : nivel === 2 ? "🟡" : nivel === 1 ? "🟢" : "";
        const td = document.createElement("td");

        td.className = "map-cell";
        td.dataset.escola = escola;
        td.dataset.programa = p;
        td.dataset.tooltip = gerarTooltip(escola, p);
        td.textContent = cor;

        td.onclick = () => {
          filtroEscola.value = escola;
          filtroPrograma.value = p;
          filtroExercicio.value = "";
          renderTabela();
          tabela.scrollIntoView({ behavior: "smooth" });
        };

        tr.appendChild(td);
      });

      tbodyMapa.appendChild(tr);
    });
  }

  /* ================================
     MODAL DE AJUDA
  ================================ */
  if (btnAjuda && modal && fechar) {
    btnAjuda.onclick = () => modal.style.display = "block";
    fechar.onclick = () => modal.style.display = "none";
    window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };
  }

  /* ================================
     INIT
  ================================ */
  preencherSelect(filtroEscola, unique(registros.map(r => r.escola)));
  preencherSelect(filtroPrograma, unique(registros.map(r => r.programa)));
  preencherSelect(filtroExercicio, unique(registros.map(r => r.exercicio)));

  filtroEscola.onchange = renderTabela;
  filtroPrograma.onchange = renderTabela;
  filtroExercicio.onchange = renderTabela;

  renderTabela();
  renderMapaGeral();

});
