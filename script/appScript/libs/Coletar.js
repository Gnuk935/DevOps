/**
 * 
 * @param {Object} objDadosParaColetar {idPlanilha,nomePagina,linhaArray,colunaArray,quantLinhasArray,quantColunaArray}
 * @returns array de dados
 */
function coletaDadosObjeto (objDadosParaColetar) {
  function coletar(objDadosParaColetar) {
      const returnArray = coletaDados(objDadosParaColetar.idPlanilha,objDadosParaColetar.nomePagina,objDadosParaColetar.linhaArray,objDadosParaColetar.colunaArray,objDadosParaColetar.quantLinhasArray,objDadosParaColetar.quantColunaArray)

      return returnArray
  }

  function normalizaArrayReturn (returnArray) {
      returnArray[0] // Finalizar dps
  }


  /**
   * depreciada - att em adamento
   * @param {int} idPlanilha ID do planilha
   * @param {string} nomePagina nome da pagina
   * @param {array} linhaArray linhas que você deseja coletar, valor padrão: [1]
   * @param {array} colunaArray colunas que você deseja coletar, valor padrão: [1]
   * @param {array} quantidadeLinhasArray Informe a quantidade de linhas
   * @param {array} quantidadeColunaArray Informe a quantidade de colunas
   * @returns {array} Um array a partir dos valores informados
  */
  function coletaDados(
      idPlanilha,
      nomePagina,
      linhaArray,
      colunaArray,
      quantLinhasArray,
      quantColunaArray
    ) {
      const pagina = SpreadsheetApp.openById(idPlanilha).getSheetByName(nomePagina);
      const tamanho = Math.max(linhaArray.length, colunaArray.length);
      const normalizados = normalizaArraysParaColeta(
        linhaArray,
        colunaArray,
        quantLinhasArray,
        quantColunaArray,
        tamanho
      );
      const linhas = normalizados[0];
      const coluna = normalizados[1];
      const quantLinhas = normalizados[2];
      const quantColuna = normalizados[3];
      
      const listValues = [];
      for (let i = 0; i < tamanho; i++) {
        listValues.push(
          pagina
            .getRange(linhas[i], coluna[i], quantLinhas[i], quantColuna[i])
            .getValues()
        );
      }
      const dadosFinais = normalizaColetados(listValues);
      return dadosFinais;
    }

    function normalizaArraysParaColeta(
      linhaArray,
      colunaArray,
      quantLinhasArray,
      quantColunaArray,
      tamanho
    ) {
      const arrayNaoManipulado = [
        linhaArray,
        colunaArray,
        quantLinhasArray,
        quantColunaArray,
      ];
      let newArrayManipulado = [[], [], [], []];
      for (let i = 0; i < arrayNaoManipulado.length; i++) {
        const aManipular = arrayNaoManipulado[i];
        if (
          aManipular.length === 0 ||
          tamanho <= 0 ||
          aManipular[0] === undefined ||
          aManipular[1] !== undefined
        ) {
          newArrayManipulado[i] = aManipular;
        } else {
          for (let b = 0; b < tamanho; b++) {
            newArrayManipulado[i].push(aManipular);
          }
        }
      }
      return newArrayManipulado;
    }

    function normalizaColetados(listValues) {
      const novoArray = [];
    
      for (let i = 0; i < listValues.length; i++) {
        const subArray = listValues[i];
        const novoArrayItem = [];
      
        for (let j = 0; j < subArray.length; j++) {
          if (
            typeof subArray[j] !== "undefined" &&
            subArray[j] !== null &&
            subArray[j] !== ""
          ) {
            novoArrayItem.push(subArray[j]);
          }
        }
      
        if (novoArrayItem.length > 0) {
          novoArray.push(novoArrayItem);
        }
      }
    
      return novoArray;
    }

    return coletar(objDadosParaColetar)
}