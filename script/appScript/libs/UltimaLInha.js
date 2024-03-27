/**
 * 
 * @param {Integer} idPlanilha 
 * @param {String} nomePagina 
 * @returns ultima linha
 */
function obterUltimaLinhaSiples(idPlanilha,nomePagina) {
    const planilha = SpreadsheetApp.openById(idPlanilha);
    const pagina = planilha.getSheetByName(nomePagina);
    const ultimaLinha = pagina.getLastRow();
    return ultimaLinha;
}

/**
 * 
 * @param {Integer} idPlanilha 
 * @param {String} nomePagina 
 * @param {Integer} linhaInicial 
 * @param {Integer} linhaFinal 
 * @returns ultima linha de um range
 */
function ultimaLinhaRange(idPlanilha,nomePagina,linhaInicial,linhaFinal){
    const planilha = SpreadsheetApp.openById(idPlanilha);
    const pagina = planilha.getSheetByName(nomePagina);
    const dadosRange = pagina.getRange(linhaInicial + ':' + linhaFinal).getValues();
    let ultimaLinhaComDados = null;

    let i = dadosRange.length - 1;
    while (i >= 0 && ultimaLinhaComDados === null) {
        if (dados[i][coluna - 1] !== '') {
        ultimaLinhaComDados = i + linhaInicial;
        }
        i--;
    }
    return ultimaLinhaComDados
}
