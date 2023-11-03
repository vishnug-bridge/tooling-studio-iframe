<template>
    <div class="group flex flex-col bg-white dark:bg-dark-grey p-4 rounded-lg cursor-pointer shadow-task">
        {{ task.title }}
        <!-- <div class="flex justify-between items-center">
            <p class="text-gray-700 font-semibold font-sans tracking-wide text-sm">{{ task.title }}</p>
            <ABtn variant="text" icon-only icon="i-bx:dots-vertical">
                <AMenu>
                    <AList :items="menuItems" v-model="selectedmenuItem"/>
                </AMenu>
            </ABtn>
        </div>
        <div>   
            <div>{{task.notes}}</div>
            <span v-if="dueDate != ''" class="text-sm rounded-lg p-1 inline-block border text-blue-500" >{{ dueDate}}</span>
        </div> -->
    </div>
</template>
<script setup>



const props = defineProps(['task','taskid'])
//const emit = defineEmits(['deleteTask'])

//import useCustomAxios from '@/composables/useAxios';
//const { postData, data: eventsData, error, loading } = useCustomAxios();

// const menuItems = [
//   { text: 'Delete',icon: 'i-bx-trash-alt text-sm cursor-pointer', value:1},
// ];

// const selectedmenuItem = ref('');

// watch(selectedmenuItem, (n, _) => {
//     if(n == 1){
//         deleteTask();
//     }
// });

// const dueDate = computed(() => {
//     if(props.task.due){
//         var md = new Date(props.task.due);
//         return useDateFormat(md, 'DD-MM-YYYY').value;
//     }
//     else
//         return '';
// })

// const deleteTask = async () => {
//     console.log(props.task.id,props.taskid)
//     // await postData(`/delete-task/${props.taskid}/${task.value.id}`)
//     // emit('deleteTask',{
//     //     task_id : props.taskid,
//     //     task_list_id: task.id
//     // })
// }

</script>
<style>
.shadow-task {
    --tw-shadow: 0 4px 6px 0px rgba(54, 78, 126, .1);
    --tw-shadow-colored: 0 4px 6px 0px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);
}
</style>