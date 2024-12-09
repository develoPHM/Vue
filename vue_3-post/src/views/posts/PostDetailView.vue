<template>
	<div>
		<h2>제목</h2>
		<p>내용</p>
		<p class="tesxt-muted">2020-01-01</p>
		<hr class="my-4" />
		<div class="row g-2">
			<div class="col-auto">
				<buttton class="btn btn-outline-dark">이전글</buttton>
			</div>
			<div class="col-auto">
				<buttton class="btn btn-outline-dark">다음글</buttton>
			</div>
			<div class="col-auto me-auto"></div>
			<div class="col-auto">
				<buttton class="btn btn-outline-dark" @click="goListPage">목록</buttton>
			</div>
			<div class="col-auto">
				<buttton class="btn btn-outline-dark" @click="goEditPage">수정</buttton>
			</div>
			<div class="col-auto">
				<buttton class="btn btn-outline-dark">삭제</buttton>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const id = route.params.id;
const goListPage = () => {
	router.push({
		name: 'PostList',
	});
};
const goEditPage = () => {
	router.push({
		name: 'PostEdit',
		params: { id },
	});
};
</script>

<style lang="scss" scoped></style>
