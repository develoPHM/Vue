<template>
	<AppLoading v-if="loading" />
	<AppError v-else-if="error" :message="error.message" />
	<div v-else>
		<h2>{{ post.title }}</h2>
		<p>{{ post.content }}</p>
		<p class="text-muted">
			{{ $dayjs(post.created_at).format('YYYY. MM. DD HH:mm:ss') }}
		</p>
		<hr class="my-4" />
		<div class="row g-2">
			<div class="col-auto">
				<button class="btn btn-outline-dark">이전글</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-dark">다음글</button>
			</div>
			<div class="col-auto me-auto"></div>
			<div class="col-auto">
				<button class="btn btn-outline-dark" @click="goListPage">목록</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-dark" @click="goEditPage">수정</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-dark" @click="remove">삭제</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { deletePost } from '@/api/post';
import AppError from '@/components/app/AppError.vue';
import AppLoading from '@/components/app/AppLoading.vue';
import { useAxios } from '@/hooks/useAxios';
const router = useRouter();
const props = defineProps({
	id: [String, Number],
});

const { error, loading, data: post } = useAxios(`posts/${props.id}`);
const remove = async () => {
	try {
		if (confirm('삭제하시겠어요?')) {
			await deletePost(props.id);
			await router.push({ name: 'PostList' });
		}
	} catch (err) {
		console.error(err);
	}
};
const goListPage = () => router.push({ name: 'PostList' });
const goEditPage = () =>
	router.push({ name: 'PostEdit', params: { id: props.id } });
</script>

<style lang="scss" scoped></style>
