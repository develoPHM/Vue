<template>
	<div>
		<h2>{{ post.title }}</h2>
		<p>{{ post.content }}</p>
		<p class="text-muted">{{ post.createdAt }}</p>
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
import { deletePost, getPostById } from '@/api/post';
import { ref } from 'vue';
const props = defineProps({
	id: Number,
});
/**
 * ref
 * 장) 객체 할당 가능
 * 단) form.value.title, form.value.content
 *
 * reactive
 * 장) form.value.title, form.value.content
 * 단) 객체 할당 불가능
 */
const router = useRouter();
const post = ref({
	title: null,
	content: null,
	created_at: null,
});
const fetchPost = async () => {
	try {
		const { data } = await getPostById(props.id);
		setPost(data);
	} catch (err) {
		console.error(err);
	}
};
const setPost = ({ title, content, createdAt }) => {
	post.value.title = title;
	post.value.content = content;
	post.value.created_at = createdAt;
};
fetchPost();
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
