/**
 * 
 * @param {String} idPlanilha id da planilha 
 * @param {String} nomePagina Nome da pagina
 * @returns status da pagina deleletada (eu acho)
 */
function deletarPagina(idPlanilha, nomePagina) {
  const planilha = SpreadsheetApp.openById(idPlanilha);
  const paginaADeletar = planilha.getSheetByName(nomePagina);
  const statusDeletado = planilha.deleteSheet(paginaADeletar);
  return statusDeletado
}