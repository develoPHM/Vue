<template>
	<div>
		<h2>게시글 수정</h2>
		<hr class="my-4" />
		<form @submit.prevent="edit">
			<div class="mb-3">
				<label for="title" class="form-label"> 제목</label>
				<input
					v-model="form.title"
					type="text"
					class="form-control"
					id="title"
				/>
			</div>
			<div class="mb-3">
				<label for="content" class="form-label">내용</label>
				<textarea
					v-model="form.content"
					class="form-control"
					id="content"
					rows="3"
				></textarea>
			</div>
			<div class="pt-4">
				<button
					type="button"
					class="btn btn-outline-danger me-2"
					@click="goDetailPage"
				>
					취소
				</button>
				<button class="btn btn-primary">수정</button>
			</div>
		</form>
	</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
import { getPostById, updatePost } from '@/api/post';

const router = useRouter();
const route = useRoute();
const id = route.params.id;
const form = ref({
	title: null,
	content: null,
});
const fetchPost = async () => {
	try {
		const { data } = await getPostById(route.params.id);
		setForm(data);
	} catch (err) {
		console.log(err);
	}
};
const setForm = ({ title, content, createdAt }) => {
	form.value.title = title;
	form.value.content = content;
	form.value.createdAt = createdAt;
};
fetchPost();
const goDetailPage = () => {
	router.push({ name: 'PostDetail', params: { id } });
};
const edit = async () => {
	try {
		await updatePost(id, { ...form.value });
		await router.push({ name: 'PostDetail', params: { id } });
	} catch (err) {
		console.error(err);
	}
};
</script>

<style lang="scss" scoped></style>
