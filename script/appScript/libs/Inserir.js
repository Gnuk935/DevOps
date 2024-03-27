/**
 * depreciada - att em adamento
 * @param {String} idPlanilha id da planilha
 * @param {String} nomePagina nome da pagina
 * @param {Boolean} inserirDados informe true para inserir dados
 * @param {Array} arrayDados coloque o array de dados a ser inserido [[dado],[dado]] (coluna ->)
 * @param {Int} linha qual a linha inicial
 * @param {Int} coluna qual a coluna inial
 * @returns status da inserção
 */
function inserirDados(idPlanilha, nomePagina, arrayDados, linha, coluna) {
  let valorColuna = coluna;
  const planilha = SpreadsheetApp.openById(idPlanilha);
  const dadosNaoIseridos = arrayDados;
  const pagina = planilha.getSheetByName(nomePagina);
  let ultima = pagina.getLastRow();
  if (ultima < 1) {
    ultima = ultima + 1;
  }
  const inserir = dadosNaoIseridos[0];
  let linhaIserir = ultima;
  let culunaIserir = valorColuna;
  let totalLinhas = inserir.length - 1;
  let totalColuna = dadosNaoIseridos.length + 1;
  pagina
    .getRange(linhaIserir, culunaIserir, totalLinhas, totalColuna)
    .setValues(dadosNaoIseridos);
  const validar = pagina.getRange(linha, coluna).getValue();
  if (validar != null) {
    return true;
  }
}