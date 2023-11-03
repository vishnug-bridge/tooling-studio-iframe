<template>
    <template v-if="pending">
        Loading
    </template>
    <template v-else>
        
        <div class="min-h-screen py-12 gap-4 grid grid-cols-3 xl:grid-cols-4">
            <div v-for="(task, key) in tasks" :key="key" class="px-3 py-3 rounded-lg">
                <p class="text-gray-700 font-semibold font-sans tracking-wide text-md border-b pb-2">{{ task.taskList.title }} </p>
                
                <draggable 
                    class="list-group" 
                    :list="task?.tasks" 
                    :group="{ name: 'my-task'}"
                    itemKey="id"
                    v-bind="dragOptions"
                    :empty-insert-threshold="0"
                    style="min-height:400px"
                >
                    <template #item="{ element, index }">
                        <task-card :key="`${key}${index}`" :task="element" :tasklistid="task.id" class="mt-3 cursor-move"></task-card>
                    </template>
                </draggable>
            </div>
            <!-- <ALoader :loading="getCreateLoading" full-page @click="getCreateLoading = false" /> -->
        </div>
    </template>
    
    <template v-if="error">
        {{ error }}
    </template>
</template>
<script setup>
    import draggable from "vuedraggable";
    const { data: tasks, pending, error } = await useLazyFetch('/api/tasks')
    
    const dragOptions = computed(() => {
        return {
            animation: 250,
            group: "people",
            disabled: false,
            ghostClass: "ghost"
        };
    });

    // const deleteTask = (task_data) =>{
    //     let index = tasks.value[task_data.task_id].tasks.items.findIndex(i=>i.id == task_data.task_list_id);
    //     if(index != -1){
    //         tasks.value[task_data.task_id].tasks.items.splice(index, 1);

    //     }
    // }   
    // const changed = async (evt,tasklistid) => {
    //     if(evt.hasOwnProperty('added')){
    //         await  createTaskApi('create-task',{
    //             tasklistid: tasklistid,
    //             task: evt.added.element
    //         })
    //     }
    //     if(evt.hasOwnProperty('removed')){
    //         await deleteTaskApi(`/delete-task/${tasklistid}/${evt.removed.element.id}`)
    //     }
    // }
</script>