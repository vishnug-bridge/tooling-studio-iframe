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
        
        async logUserOut() {
            const token = useCookie('ts_token');
            this.authenticated = false;
            this.user_data = null;
            token.value = null;
            return true
        },
    },
});