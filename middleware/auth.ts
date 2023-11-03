import { storeToRefs } from 'pinia';
import { useAuthStore } from "~/store/auth";

export default defineNuxtRouteMiddleware((to) => {
    const { authenticated } = storeToRefs(useAuthStore()); 
    const token = useCookie('token'); 
    console.log('token',token)
    if (token.value) {
        authenticated.value = true;
    }
  
    if (!token.value) {
      abortNavigation();
      return navigateTo('/');
    }
});