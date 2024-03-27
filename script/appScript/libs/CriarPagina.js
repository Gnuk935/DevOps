/**
 * @param {String} idPlanilha id da planilha
 * @param {String} nomeNovaPagina informe o nome da nova
 * @returns status da criação
 */
function criarPagina(idPlanilha, nomeNovaPagina) {
  const planilha = SpreadsheetApp.openById(idPlanilha);
  const validaPagina = planilha.getSheetByName(nomeNovaPagina);
  if (validaPagina == null) {
    const nova_pagina = planilha.insertSheet();
    nova_pagina.setName(nomeNovaPagina);
  } else {
    Logger.log(`A pagina ${nomeNovaPagina} já existe`);
  }
  const status = planilha.getSheetByName(nomeNovaPagina);
  if (status != null) {
    return true;
  }
  return false;
}