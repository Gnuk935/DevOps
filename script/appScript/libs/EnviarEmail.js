/**
 * @param {String} dest destinatario
 * @param {String} id ID do anexo no drive
 * @param {String} assunto Assunto do email
 * @param {String} corpoEmail oque escrever no corpo
 * @param {String} nomeEmail  nome do email
 */
function enviarEmail(dest, id, assunto, corpoEmail, nomeEmail) {
  const item = DriveApp.getFileById(id);
  GmailApp.sendEmail(dest, assunto, corpoEmail, {
    attachments: item,
    nome: nomeEmail,
  });
}