<script setup>
import Sidebar from '../components/Sidebar.vue'
</script>

<template>
	<div class="flex min-h-screen bg-[#010300]">
		<Sidebar />

		<main class="flex min-w-0 flex-1 justify-center px-4 sm:px-6 lg:px-10">
			<div class="w-full">
				<router-view />
			</div>
		</main>
	</div>
</template>