
import initoAuth2Client from '~/server/helpers/authClient';

const config = useRuntimeConfig();
const googleClientId = config.GOOGLE_CLIENT_ID;

export default defineEventHandler(async (event) => {
    try {
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

        const user = await verify(result.tokens.id_token);

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



async function verify(token) {
    const client = await initoAuth2Client();

    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: googleClientId,
    });
    const payload = ticket.getPayload();
    return payload;
}
