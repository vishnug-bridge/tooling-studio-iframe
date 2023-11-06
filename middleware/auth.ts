import { storeToRefs } from 'pinia';
import { useAuthStore } from "~/store/auth";

export default defineNuxtRouteMiddleware(() => {
    const { authenticated } = storeToRefs(useAuthStore()); 
    const token = useCookie('ts_token'); 
    if (token.value && token.value != undefined) {
        authenticated.value = true;
    }
    else{
        return navigateTo('/');
    }
    
});