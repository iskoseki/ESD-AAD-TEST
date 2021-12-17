https

console.log('Server running at http://127.0.0.1:8081/');

import {ConfidentialClientApplication} from '@azure/msal-node'; 
//import dotenv from 'dotenv';
//import fetch from 'node-fetch';
//dotenv.config();

const config = {
    auth: {
        clientId: "be2ed2d6-980a-49f1-9008-c408ae495753",
        authority: "https://login.microsoftonline.com/msretailfederation.onmicrosoft.com",
        clientCertificate: {
            thumbprint: "734F07557964BEAA1F4786513E817BB3E92BEFBB", // a 40-digit hexadecimal string
            privateKey: "46f3e425-b99a-49b8-bbea-1ead1e7c47a7",  //46f3e425-b99a-49b8-bbea-1ead1e7c47a7 
        }
    }
};
//var client = new ConfidentialClientApplication(config);
const cca =  new ConfidentialClientApplication(config);

var request = { 
    scopes: ['https://sandbox.esd.channelinclusion.microsoft.com/'], // scopes for access token https://graph.microsoft.com/.default
}
//let response = await cca.acquireTokenByClientCredential(request);
//console.dir(response);
cca.acquireTokenByClientCredential(request).then((response) => {
    console.log(response.accessToken);
}).catch((error) => {
    console.log(JSON.stringify(error));
});


/*
 let query = await fetch('https://sandamericas.channelinclusiontest.microsoft.com', {     //getUsers example  https://graph.microsoft.com/v1.0/users
    headers: {
        'Authorization': `Bearer ${response.accessToken}`,
    },
})  
let json = await query.json();
//console.dir(json);
*/