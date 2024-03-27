/**
 * @param {String} nomePagina Informe o nome da pagina que voce deseja coletar os dados
 * @param {String} idPlanilha Informe o id da planilha que sera manipulada
 * @param {Int} linha informe a linha para onde os dados serão copiados
 * @param {Int} coluna Informe a coluna para onde os dados sersão copiados
 * @param {Int} tipoPagina 1 -> Copia para uma area na mesma pagina 2 -> Cria uma nova pagina 3 -> Insere em outra pagina
 * @param {String} newNomePagina Nome da nova pagina ou nome da pagina para inserir os dados
 * @returns booleano com status
 */
function retornaDadosFiltrados(
  nomePagina,
  idPlanilha,
  linha,
  coluna,
  tipoPagina,
  newNomePagina
) {
  const planilha = SpreadsheetApp.openById(idPlanilha);
  const pagina = planilha.getSheetByName(nomePagina);
  if (tipoPagina == 1) {
    range = pagina.getDataRange();
    range.copyTo(pagina.getRange(linha, coluna));
    if (pagina.getRange(linha, coluna) != null) {
      return true;
    }
  } else if (tipoPagina == 2) {
    range = pagina.getDataRange();
    const nova_planilha = planilha.insertSheet();
    nova_planilha.setName(newNomePagina);
    range.copyTo(nova_planilha.getRange(linha, coluna));
    if (nova_planilha.getRange(linha, coluna) != null) {
      return true;
    }
  } else if (tipoPagina == 3) {
    const pagina = planilha.getSheetByName(newNomePagina);
    range = pagina.getDataRange();
    range.copyTo(pagina.getRange(linha, coluna));
  }
  return false;
}
