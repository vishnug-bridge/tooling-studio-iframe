import { google } from 'googleapis';
import setCredentials from '~/server/helpers/setAuthCredentials';

export default defineEventHandler(async (event) => {

    try {
        
        let token = getCookie(event, 'ts_token') || {};

        if (token) {
            const cred_client = await setCredentials(token);

            const tasks = google.tasks({ version: 'v1', auth: cred_client });

            const taskListsResponse = await tasks.tasklists.list();
            
            const taskLists = taskListsResponse.data.items || [];

            const allTasks = await Promise.all(
                taskLists.map(async (taskList) => {
                    const tasksResponse = await tasks.tasks.list({
                        tasklist: taskList.id,
                    });

                    
                    return {
                        taskList: taskList,
                        tasks: tasksResponse?.data?.items || [],
                    };
                })
            );

            return allTasks;
        } else {
            throw new Error('Token not found.');
        }
    } catch (error) {
        console.error('Error fetching task lists and tasks:', error);
        throw error;
    }
});
