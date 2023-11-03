import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authenticated: false,
        user_data: null,
    }),
    actions: {
        async authenticateUser(userData) {
            this.user_data = userData;
            this.authenticated = true;
            return true;
        },
        logUserOut() {
            //const token = useCookie('token'); // useCookie new hook in nuxt 3
            //this.authenticated = false; // set authenticated  state value to false
            //token.value = null; // clear the token cookie
        },
    },
});