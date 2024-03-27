/**
 *
 * @param {String} nomePagina informe o nome da pagina principal
 * @param {String} idPlanilha informe o ID da planilha
 * @param {Object} objRange Objeto: {linha: [int], coluna:[int], quantidadeLinha: [int], quantidadeColuna: [int]}
 * @param {Object} objFiltro Objeto: {[int]coluna: [string]filtro}
 * @returns array com o filtro e status da filtragem
 */
function filtrarDados(nomePagina, idPlanilha, objRange, objFiltro) {
  let status = false;
  const planilha = SpreadsheetApp.openById(idPlanilha);
  const pagina = planilha.getSheetByName(nomePagina);
  const criterioFilter = SpreadsheetApp.newFilterCriteria();
  const obejtoValido = validaObejto(objRange);
  let range;
  if (typeof obejtoValido.linha == "number") {
    range = pagina.getRange(
      obejtoValido.linha,
      obejtoValido.coluna,
      obejtoValido.quantidadeLinha,
      obejtoValido.quantidadeColuna
    );
  } else if (typeof obejtoValido.linha == "string") {
    range = pagina.getRange(obejtoValido.rangeInt);
  } else {
    Logger.log("Erro ao validar tipo do range");
  }
  const filtro = range.createFilter();
  for (let key in objFiltro) {
    const colunaParaFiltrar = key;
    const valorParaFiltrar = objFiltro[key];
    if (parseInt(colunaParaFiltrar) !== NaN) {
      const condicaoFiltro = criterioFilter.whenTextContains(valorParaFiltrar);
      const filtrado = filtro.setColumnFilterCriteria(
        colunaParaFiltrar,
        condicaoFiltro
      );
      status = true;
    } else {
      Logger.log("Erro ao tentar definir os filtros (FiltrarDados)");
      Logger.log("A culuna não é um numero");
      status = false;
    }
  }
  return [status, filtro];
}

/**
 *
 * @param {Object} objRange object: linha, coluna, quantidadeLinha, quantidadeColuna
 * @returns objeto validado
 */
function validaObejto(objRange) {
  if (
    objRange.linha !== undefined &&
    objRange.coluna !== undefined &&
    objRange.quantidadeLinha !== undefined &&
    objRange.quantidadeColuna !== undefined
  ) {
    if (
      typeof objRange.linha == "number" &&
      typeof objRange.coluna == "number"
    ) {
      return objRange;
    } else if (
      typeof objRange.linha == "string" &&
      typeof objRange.coluna == "string"
    ) {
      let rangeInt = objRange.linha + ":" + objRange.coluna;
      objRange.rangeInt = rangeInt;
      return objRange;
    } else {
      Logger.log("Obejto invalido! Função: validaObejto (filtrar dados)");
    }
  } else {
    Logger.log("Obejto não definido! Função: validaObejto (filtrar dados)");
  }
}
