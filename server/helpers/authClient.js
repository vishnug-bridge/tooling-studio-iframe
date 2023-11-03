
import { OAuth2Client } from 'google-auth-library';

const { googleClientId,googleClientSecret, googleRedirectUrl } = useRuntimeConfig();

export default function initoAuth2Client() {

    const oAuth2Client = new OAuth2Client(
        googleClientId,
        googleClientSecret,
        googleRedirectUrl
    );

    return oAuth2Client;
}
