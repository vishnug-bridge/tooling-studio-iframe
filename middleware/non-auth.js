import { storeToRefs } from 'pinia';
import { useAuthStore } from "~/store/auth";

export default defineNuxtRouteMiddleware(() => {
    const { authenticated } = storeToRefs(useAuthStore()); 
    const token = useCookie('ts_token'); 
    if (token.value && token.value != null) {
        authenticated.value = true;
        abortNavigation();
        return navigateTo('/dashboard');
    }
  
});