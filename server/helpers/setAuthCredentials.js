
import initoAuth2Client from '~/server/helpers/authClient'

export default async function setCredentials(token) {
    try {
        let token_data = JSON.parse(token);
        const client = await initoAuth2Client();
        client.setCredentials(token_data);
        return client;
    } catch (error) {
        console.log(error)    
    }
    
    
}
