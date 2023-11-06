<template>
    
    <div class="p-7">
        <div class="flex justify-between mb-6">
            <div class="">
                <h3 class="text-[30px] font-medium">Kanban Boards</h3>
                <p>you've got 24 open taks in 7 lists and 3 boards </p>
            </div>
            
            <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="rounded-full ">
                        <Icon name="material-symbols:settings-outline" size="25px"/>
                    </div>
                </label>
                <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                    <a>
                        Profile
                    </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a @click="logout" class="cursor-pointer">Logout</a></li>
                </ul>
                
            </div>
        </div>
        
        <div class="tabs">
            <button class="tab tab-bordered" @click="goToTab(1,'/dashboard/work-done')"  :class="activeTab == 1 ? 'tab-active':''">
                <div class="flex items-center">
                    <Icon size="25px" name="material-symbols:calendar-month-outline-rounded" color="var(--tab-color)" /> 
                    <span class="ml-2">Get Work Done</span>
                    <span class=" bg-gray-300 flex items-center leading-none rounded-full ml-2 h-5 w-5 justify-center">2</span>
                </div>
            </button> 
            <nuxt-link class="tab tab-bordered" @click="goToTab(2,'/dashboard/main-board')" :class="activeTab == 2 ? 'tab-active':''">
                
                <div class="flex items-center">
                    <span class="ml-2">Main Board</span>
                    <span class=" bg-gray-300 flex items-center leading-none rounded-full ml-2 h-5 w-5 justify-center">2</span>
                </div>
            </nuxt-link> 
            <button class="tab tab-bordered" @click="goToTab(3,'/dashboard')" :class="activeTab == 3 ? 'tab-active':''">
                MDT
            </button>
            <button class="tab tab-bordered" @click="goToTab(4,'/dashboard')" :class="activeTab == 4 ? 'tab-active':''">
                Tooling Studio
            </button>
        </div>
        <NuxtPage/>
    </div>
</template>
<script setup>
    const activeTab = ref(1);
    const router = useRouter()
    const route = useRoute();
    const token = useCookie('ts_token');
    import { useAuthStore } from '../store/auth'

    const store = useAuthStore()
    
    definePageMeta({
        middleware: 'auth'
    })

    if(route.path.includes('work-done')){
        activeTab.value = 1;
    }
    else if(route.path.includes('main-board')){
        activeTab.value = 2;
    }
    

    const goToTab = (tab_id,url) => {
        activeTab.value = tab_id;
        router.replace(url)
    }

    const logout = async () => {
        const result = await useLazyFetch('/api/logout',{
            method:'POST'
        }); 

        if(result){
            store.logUserOut().then(()=>{
                router.replace('/')
            });
        }
        
        
    }
</script>
<style scoped>
    .tab{
        @apply font-semibold
    }
    .tab-active	{
        @apply text-indigo-500 !border-b-indigo-500;
    }
</style>