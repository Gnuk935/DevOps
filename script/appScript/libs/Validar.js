/**
 * 
 * @param  {...any} arrays informe os arrays
 * @throws {Error} Se algum array for inválido
 * @returns true caso todos sejam verdadeiros
 */
function validaArraysNaoVazios(...arrays) {
    for (let arr of arrays) {
        if (!(Array.isArray(arr) && arr.length > 0)) {
            throw new Error("Array inválido!");
        }
    }
    return true;
}

/**
 * 
 * @param {Integer} idPlanilha idPlanilha, um int qualquer 
 * @throws {Error} Se o ID da planilha não for um número inteiro
 * @returns se é válido ou não
 */
function validaIdPlanilha(idPlanilha) {
    if (!Number.isInteger(idPlanilha) || idPlanilha === "") {
        throw new Error("ID da planilha inválido!");
    }
    return true;
}

/**
 * 
 * @param {String} name Nome, uma string qualquer
 * @throws {Error} Se o nome não for uma string válida
 * @returns se é válido ou não
 */
function validaString(name) {
    if (typeof name !== 'string' || name.trim() === "") {
        throw new Error("Nome inválido!");
    }
    return true;
}
