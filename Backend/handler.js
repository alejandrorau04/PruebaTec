const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();
const { sendInvitationEmail } = require('./utils/ses');

module.exports.inviteMember = async (event) => {
  const { email, role = 'Member', organizationId = 'ORG001' } = JSON.parse(event.body);

  // Guardar en DynamoDB
  await dynamo.put({
    TableName: 'Members',
    Item: { email, role, organizationId }
  }).promise();

  // Enviar correo con SES
  await sendInvitationEmail(email, role, organizationId);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Miembro invitado correctamente' })
  };
};
