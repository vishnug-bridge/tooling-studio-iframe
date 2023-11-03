
import initoAuth2Client from '~/server/helpers/authClient';

export default defineEventHandler(async (event) => {
    try {
        const config = useRuntimeConfig(event)

        const body = await readBody(event);
        const code = body.code;

        if (!code) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Invalid Token',
            });
        }

        const client = await initoAuth2Client();

        const result = await client.getToken(code);

        const user = await verify(result.tokens.id_token,config.googleClientId);

        if (user) {
            setCookie(event, 'token', JSON.stringify(result.tokens))
            return user;
        }
        else {
            throw createError({
                statusCode: 400,
                statusMessage: 'Invalid Token',
            });
        }

    } catch (error) {
        console.log(error)
    }


});



async function verify(token,googleClientId) {
    const client = await initoAuth2Client();

    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: googleClientId,
    });
    const payload = ticket.getPayload();
    return payload;
}
