<template>
	<main>
		<header>
			<img src="../src/assets/logo-pinia.svg" alt="pinia" />
			<h1>Pinia Tasks</h1>
		</header>
	</main>

	<div class="task-list">
		<div v-for="task in taskStore.tasks" :key="task.id">
			<p>{{ task.title }}</p>
		</div>

		<button
			@click="taskStore.addTask({ id: 1, title: 'task test', isFav: true })"
		>
			Add
		</button>

		<button @click="taskStore.popTask()">Pop</button>
	</div>
</template>

<script setup>
import { useTaskStore } from './stores/TaskStore';

const taskStore = useTaskStore();
</script>

<style lang="scss" scoped></style>
