import {ConfidentialClientApplication} from '@azure/msal-node';  

//import dotenv from 'dotenv';
import fetch from 'node-fetch';
 
dotenv.config();
//msal-node configuration
const config = {
    auth: { 
        clientId: '13ce2cf3-92f5-4c1a-92a0-f4655a10d51b', //clientId: '13ce2cf3-92f5-4c1a-92a0-f4655a10d51b',
        authority: 'https://login.microsoftonline.com/b3fc8718-0fcb-4f4b-9c95-c48db3c88e26', // Tenant-specific authority https://login.microsoftonline.com/b3fc8718-0fcb-4f4b-9c95-c48db3c88e26
        clientSecret: 'Btx7Q~NEq6nUD7-4dy3MSk~XNfh2OUWlDHOCp', //Certificate ID = b3fc8718-0fcb-4f4b-9c95-c48db3c88e26
    }
}

var client = new ConfidentialClientApplication(config);

var request = { 
    scopes: ['https://graph.microsoft.com/.default'],
}

let response = await client.acquireTokenByClientCredential(request);

console.dir(response);


 let query = await fetch('https://graph.microsoft.com/v1.0/users ', {     //getUsers example
    headers: {
        'Authorization': `Bearer ${response.accessToken}`,
    },
})  
let json = await query.json();

console.dir(json);



