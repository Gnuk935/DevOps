/**
 * 
 * @param {Integer} linha
 * @param {Integer} coluna 
 * @param {Integer} quantidadeLinha 
 * @param {Integer} quantidadeColuna 
 * @throws {Error} Se algum parâmetro não for um número inteiro
 * @returns {Object} Objeto range
 */
function gerarObjectRangeFiltro(linha, coluna, quantidadeLinha, quantidadeColuna) {
    try {
        if ([linha, coluna, quantidadeLinha, quantidadeColuna].every(param => Number.isInteger(param))) {
            return {
                linha: linha,
                coluna: coluna,
                quantidadeLinha: quantidadeLinha,
                quantidadeColuna: quantidadeColuna
            };
        } else {
            throw new Error("Informe valores inteiros para linha, coluna, quantidadeLinha e quantidadeColuna!");
        }
    } catch (error) {
        throw new Error("Erro ao gerar objeto range de filtro: " + error.message);
    }
}


/**
 * 
 * @param {Integer} idPlanilha informe o id da planilha
 * @param {String} nomePagina informe o nome da página
 * @param {Array} linhaArray array de linhas
 * @param {Array} colunaArray array de colunas
 * @param {Array} quantLinhasArray array para a quantidade de linhas
 * @param {Array} quantColunaArray array para quantidade de colunas
 * @throws {Error} Se algum dos parâmetros não for válido
 * @returns obj: {idPlanilha,nomePagina,linhaArray,colunaArray,quantLinhasArray,quantColunaArray}
 */
function gerarObjectRangeColetarDados(idPlanilha, nomePagina, linhaArray, colunaArray, quantLinhasArray, quantColunaArray) {
    try {
        if (!validaArraysNaoVazios(linhaArray, colunaArray, quantLinhasArray, quantColunaArray)) throw new Error("Pelo menos um dos arrays está vazio!");
        if (!validaIdPlanilha(idPlanilha)) throw new Error("idPlanilha não é um número inteiro válido!");
        if (!validaString(nomePagina)) throw new Error("nomePagina não é uma string válida!");
        if (linhaArray.length !== colunaArray.length || linhaArray.length !== quantLinhasArray.length || linhaArray.length !== quantColunaArray.length) throw new Error("Os arrays linhaArray, colunaArray, quantLinhasArray e quantColunaArray devem ter o mesmo tamanho!");

        return { 
            idPlanilha, 
            nomePagina, 
            linhaArray, 
            colunaArray, 
            quantLinhasArray, 
            quantColunaArray 
        };
    } catch (error) {
        throw new Error("Erro ao gerar objeto range de coleta de dados: " + error.message);
    }
}


/**
 * @param {String} idPlanilha id da planilha
 * @param {String} nomePagina nome da página
 * @param {Boolean} inserirDados informe true para inserir dados
 * @param {Array} arrayDados coloque o array de dados a ser inserido [[dado],[dado]] (coluna ->)
 * @param {Int} linha qual a linha inicial
 * @param {Int} coluna qual a coluna inicial
 * @throws {Error} Se algum dos parâmetros não for válido
 * @returns {Object} Objeto contendo os parâmetros fornecidos
 */
function gerarObjectInserirDados(idPlanilha, nomePagina, inserirDados, arrayDados, linha, coluna) {
    try {
        if (!validaIdPlanilha(idPlanilha)) throw new Error("idPlanilha deve ser um número inteiro!");
        if (!validaString(nomePagina)) throw new Error("nomePagina deve ser uma string válida!");
        if (!validaArraysNaoVazios(arrayDados)) throw new Error("arrayDados não pode ser vazio!");
        if (typeof inserirDados !== 'boolean') throw new Error("inserirDados deve ser um booleano!");
        if (!validaIdPlanilha(linha) || !validaIdPlanilha(coluna)) throw new Error("linha e coluna devem ser números inteiros!");

        return {
            idPlanilha: idPlanilha,
            nomePagina: nomePagina,
            inserirDados: inserirDados,
            arrayDados: arrayDados,
            linha: linha,
            coluna: coluna
        };
    } catch (error) {
        throw new Error("Erro ao gerar objeto de inserção de dados: " + error.message);
    }
}
