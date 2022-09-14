//QAS: https://qas-authmanager-api.azurewebsites.net

//PROD: https://authmanager-api.azurewebsites.net

const AUTHMANAGER_URL = 'https://authmanager-api.azurewebsites.net';
export const environment = {
  production: false,
  apiAuthUrl: AUTHMANAGER_URL,
  apiAuthKey: 'FDD0A85E-1EDC-44E2-8F11-5AE595F5B984',
  apiCatalog: 'https://localhost:44366',
  rfcRegexc: /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/,
  apiSap: 'http://ec2-54-156-162-6.compute-1.amazonaws.com:50000/RESTAdapter/QA',
};