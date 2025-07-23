# Prueba Técnica: Gestor de Organizaciones y Miembros

> SPA en Angular con autenticación mediante AWS Cognito y backend Serverless en AWS.  
> Implementación modular, escalable, y segura de gestión organizacional y de roles.

---

## 🚀 Tecnologías utilizadas

### Frontend
- Angular v14+
- Angular Material (UI responsiva)
- AWS Cognito OAuth2
- Lazy loading con `RouterModule`
- Guards de autenticación (`AuthGuard`)
- Servicios por dominio (`UserService`, `MemberService`, etc.)

### Backend
- Serverless Framework
- AWS Lambda (Node.js)
- API Gateway RESTful
- DynamoDB (`Organizations`, `Members`)
- AWS SES (correo de invitación)
- IAM con privilegios mínimos

---

## 📦 Funcionalidades implementadas

- 🔐 Login/logout con AWS Cognito
- 📊 Dashboard protegido con vista de organizaciones
- 🏢 Gestión de organizaciones (crear, editar, eliminar)
- 👥 Gestión de miembros:
  - Invitar por correo con SES
  - Ver lista con roles
  - Editar rol (Owner, Admin, Member)
  - Eliminar miembros
- 📄 Documentación técnica completa
- 🖼️ Diagrama visual del flujo de arquitectura

---

## ⚙️ Infraestructura como código (`serverless.yml`)

- Tabla DynamoDB: `Members`
- Funciones Lambda:
  - `inviteMember`
  - `getMembers`
  - `createOrganization`
  - `getOrganizations`
- Permisos IAM:
  - `dynamodb:PutItem`, `Scan`
  - `ses:SendEmail`

---

## 🔐 Seguridad

- AWS Cognito + AuthGuard
- IAM Roles con privilegios mínimos
- Validación de sesión antes de renderizar módulos
- Sanitización de inputs desde Angular
- Acceso segmentado por rol en cada vista

---

## 🧠 Escalabilidad

| Componente    | Escala automática |
|---------------|-------------------|
| Lambda        | ✅                |
| DynamoDB      | ✅                |
| Cognito       | ✅                |
| Angular SPA   | ✅ (puede ir a S3 + CloudFront) |

---

## 🧪 Pruebas recomendadas

- Unitarias: `MembersComponent`, `AuthGuard`, `inviteMember Lambda`
- End-to-End (E2E): Cypress en Angular
- Backend: `aws-sdk-mock` + `jest`

---

## 📈 Logging y Monitoreo

- CloudWatch: invocaciones y errores Lambda
- Sentry: opción para monitorear SPA Angular
- Angular `ErrorHandler`: captura de errores en cliente

---

## 📄 Entregables

- ✅ Repositorio con frontend Angular y backend Serverless
- ✅ Infraestructura declarada en `serverless.yml`
- ✅ Diagrama técnico de flujo y arquitectura
- ✅ Documento técnico detallado
- ✅ Pruebas unitarias sugeridas y mejoras futuras

---

## 📌 Autor

**Alejandro Rau**  
Resiliente, meticuloso y comprometido con la excelencia técnica  
🛠️ Arquitectura limpia, modular y segura  
💡 Enfocado en resultados visibles, funcionales y bien documentados

