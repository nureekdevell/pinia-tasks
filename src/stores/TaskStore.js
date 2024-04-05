import { ref } from 'vue';
import { defineStore } from 'pinia';

// export const useTaskStore = defineStore('taskStore', {
// 	state: () => ({
// 		tasks: [
// 			{ id: 1, title: 'buy some milk', isFav: false },
// 			{ id: 2, title: 'play Gloomhaven', isFav: true },
// 		],
// 	}),
// });

export const useTaskStore = defineStore('taskStore', () => {
	const tasks = ref(JSON.parse(localStorage.getItem('tasks')) ?? []);

	const addTask = task => {
		tasks.value.push(task);
		localStorage.setItem('tasks', JSON.stringify(tasks.value));
	};

	const popTask = () => {
		tasks.value.pop();
		localStorage.setItem('tasks', JSON.stringify(tasks.value));
	};

	return { tasks, addTask, popTask };
});
