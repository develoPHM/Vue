<template>
	<div class="text-center py-5">
		<h1>404 Not Found</h1>
		<br />
		<button class="btn btn-primary" @click="goHome">홈으로</button>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goHome = () => {
	router.push({
		name: 'Home',
	});
};
</script>

<style lang="scss" scoped></style>
