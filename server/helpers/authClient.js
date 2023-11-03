
import { OAuth2Client } from 'google-auth-library';

const { googleClientId,googleClientSecret, googleRedirectUrl } = useRuntimeConfig();
console.log(googleClientId,googleClientSecret,googleRedirectUrl)
// const googleClientId = config.public.googleClientId;
// const googleClientSecret = config.public.googleClientSecret;
// const googleRedirectUri = config.public.googleRedirectUrl;

export default function initoAuth2Client() {

    const oAuth2Client = new OAuth2Client(
        googleClientId,
        googleClientSecret,
        googleRedirectUrl
    );

    return oAuth2Client;
}
