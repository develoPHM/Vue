<template>
	<div>
		<h2>MyPage</h2>
	</div>
</template>

<script setup>
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router';

onBeforeRouteUpdate(() => {
	console.log('진입');
});
onBeforeRouteLeave(() => {
	console.log('onBeforeRouteLeave');
});
</script>
<script>
export default {
	beforeRouteEnter() {
		console.log('beforeRouteEnter');
	},
};
</script>
