import { storeToRefs } from 'pinia';
import { useAuthStore } from "~/store/auth";

export default defineNuxtRouteMiddleware((to) => {
    const { authenticated } = storeToRefs(useAuthStore()); 
    const token = useCookie('token'); 
    if (token.value) {
        authenticated.value = true;
        abortNavigation();
        return navigateTo('/dashboard');
    }
  
});