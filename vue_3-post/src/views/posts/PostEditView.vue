<template>
	<div>
		<h2>게시글 수정</h2>
		<hr class="my-4" />
		<PostForm
			v-model:title="form.title"
			v-model:content="form.content"
			@submit.prevent="edit"
		>
			<template #action>
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
			</template>
		</PostForm>
		<AppAlert
			:show="showAlert"
			:message="alertMessage"
			:type="alertType"
		></AppAlert>
	</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
import { getPostById, updatePost } from '@/api/post';
import PostForm from '@/components/posts/PostForm.vue';
import AppAlert from '@/components/AppAlert.vue';

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
		vAlert('네트워크오류');
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
		vAlert('수정이 완료되었습니다.', 'success');
		// await router.push({ name: 'PostDetail', params: { id } });
	} catch (err) {
		console.error(err);
	}
};
// alert
const showAlert = ref(false);
const alertMessage = ref('');
const alertType = ref('');
const vAlert = (message, type = 'error') => {
	showAlert.value = true;
	alertMessage.value = message;
	alertType.value = type;
	setTimeout(() => {
		showAlert.value = false;
	}, 2000);
};
</script>

<style lang="scss" scoped></style>
