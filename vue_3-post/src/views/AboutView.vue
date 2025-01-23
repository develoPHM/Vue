<template>
	<div>
		<h2>About View</h2>
		<p>{{ $route.path }}</p>
		<button class="btn btn-primary" @click="$router.push('/')">
			Home 으로 이동
		</button>
		<h2>store</h2>
		<p>storeToRefs: {{ counter }}</p>
		<p>counter: {{ store.counter }}</p>
		<p>doubleCount: {{ doubleCount }}</p>
		<button @click="increment">Increment</button>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useCounterStore } from '@/stores/counter';

const store = useCounterStore();
import { storeToRefs } from 'pinia';
const { counter, doubleCount } = storeToRefs(store);
const { increment } = store;
const route = useRoute();
console.log('route.path: ', route.path);

</script>

<style lang="scss" scoped></style>
