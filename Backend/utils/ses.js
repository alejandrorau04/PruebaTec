const AWS = require('aws-sdk');
const ses = new AWS.SES();

exports.sendInvitationEmail = async (email, role, organizationId) => {
  const params = {
    Source: 'noreply@tudominio.com', // ← Debe estar verificado en SES
    Destination: { ToAddresses: [email] },
    Message: {
      Subject: { Data: 'Invitación a PruebaTec' },
      Body: {
        Text: {
          Data: `Has sido invitado como ${role} a la organización ${organizationId}. Ingresa a https://pruebatec.com/login para aceptar.`
        }
      }
    }
  };

  await ses.sendEmail(params).promise();
};
