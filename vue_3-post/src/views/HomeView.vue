<template>
	<div>
		<h2>HomeView</h2>
		<p>{{ $route.path }}</p>
		<p>{{ $route.name }}</p>
		<button class="btn btn-primary" @click="goAboutPage">About으로 이동</button>
		<hr class="my-4" />
		<AppGrid :items="items" v-slot="{ item }">
			<AppCard>{{ item }}</AppCard>
		</AppGrid>
		<hr class="my-4" />
		<!--		<h2>{{ $person.name }}</h2>-->
		<!--		<button class="btn btn-primary" @click="person.say">click duck</button>-->
		<h2>반응형 toRef, toRefs{{ position }}</h2>
		<h2>x: {{ x }}</h2>
		<h2>y: {{ y }}</h2>
	</div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { reactive, ref, toRef, toRefs } from 'vue';

const router = useRouter();
const goAboutPage = () => {
	router.push('/about');
};
const items = ref(['사과', '딸기', '포도', '수박']);

const position = reactive({
	x: 100,
	y: 1000,
});
// const x = toRef(position, 'x');
// const y = toRef(position, 'y');
const { x, y } = toRefs(position);
</script>

<style lang="scss" scoped></style>
