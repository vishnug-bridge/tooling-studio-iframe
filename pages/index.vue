<script setup>
const router = useRouter()

import {
    useCodeClient
} from "vue3-google-signin";

const handleOnSuccess = async (response) => {
    const { code } = response;

    const result = await $fetch("/api/google-login", {
        method: "POST",
        body: {
            code: code
        }
    });

    console.log(result);
    console.log(router)
    if(result){
        console.log(router)
        router.push('/dashboard')
    }
};

const handleOnError = (errorResponse) => {
    console.log("Error: ", errorResponse);
};

const { isReady, login } = useCodeClient({
    onSuccess: handleOnSuccess,
    onError: handleOnError,
    scope: "https://www.googleapis.com/auth/tasks.readonly https://www.googleapis.com/auth/tasks"
});
</script>

<template>
    <div class="px-6 sm:px-0 max-w-sm flex justify-center items-center min-h-screen min-w-full">
        <button class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2" :disabled="!isReady" @click="() => login()">
            <Icon name="mdi:google" class="mr-2"/> 
            Login with Google
        </button>
    </div>
</template>
