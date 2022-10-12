//                     AUTHMANAGER
//DEV: https://dev-authmanager-api.azurewebsites.net
//QAS: https://qas-authmanager-api.azurewebsites.net
//PROD: https://authmanager-api.azurewebsites.net

//                     RHMANAGER API
//DEV: https://rhmanager-dev-api.azurewebsites.net
//QAS: https://rhmanager-qas-api.azurewebsites.net
//PROD: https://rhmanager-api.azurewebsites.net



const AUTHMANAGER_URL = 'https://authmanager-api.azurewebsites.net/api';
export const environment = {
  production: false,
  apiAuthUrl: AUTHMANAGER_URL,
  apiAuthKey: 'FDD0A85E-1EDC-44E2-8F11-5AE595F5B984',
  apiCatalog: 'https://rhmanager-dev-api.azurewebsites.net',
  apiSap: 'https://fr-sap-po.farmaciasroma.com:51001/RESTAdapter',
};
