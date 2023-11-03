<template>
    <div class="p-7">
        <div class="mb-6">
            <h3 class="text-[30px] font-medium">Kanban Boards</h3>
            <p>you've got 24 open taks in 7 lists and 3 boards </p>
        </div>
        <div class="tabs">
            <button class="tab tab-bordered"  @click="activeTab = 1" :class="activeTab == 1 ? 'tab-active':''">
                <div class="flex items-center">
                    <Icon size="25px" name="material-symbols:calendar-month-outline-rounded" color="var(--tab-color)" /> 
                    <span class="ml-2">Get Work Done</span>
                    <span class=" bg-gray-300 flex items-center leading-none rounded-full ml-2 h-5 w-5 justify-center">2</span>
                </div>
            </button> 
            <button class="tab tab-bordered" @click="activeTab = 2" :class="activeTab == 2 ? 'tab-active':''">
                
                <div class="flex items-center">
                    <span class="ml-2">Main Board</span>
                    <span class=" bg-gray-300 flex items-center leading-none rounded-full ml-2 h-5 w-5 justify-center">2</span>
                </div>
            </button> 
            <button class="tab tab-bordered" @click="activeTab = 3" :class="activeTab == 3 ? 'tab-active':''">
                MDT
            </button>
            <button class="tab tab-bordered" @click="activeTab = 4" :class="activeTab == 4 ? 'tab-active':''">
                Tooling Studio
            </button>
        </div>
        <div>
            <div v-if="activeTab == 1">1</div>
            <div v-if="activeTab == 2">
                <main-board/>
            </div>
            <div v-if="activeTab == 3">3</div>
            <div v-if="activeTab == 4">4</div>
        </div>
        <!-- <ClientOnly>
            <Kanban/>
        </ClientOnly> -->
        
    </div>
</template>
<script setup>
    const activeTab = ref(1);

    definePageMeta({
        middleware: 'auth'
    })

    


</script>
<style scoped>
    .tab{
        @apply font-semibold
    }
    .tab-active	{
        @apply text-indigo-500 !border-b-indigo-500;
    }
</style>