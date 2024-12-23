<template>
	<AppLoading v-if="loading" />
	<AppError v-else-if="error" :message="error.message" />
	<div v-else>
		<h2>게시글 수정</h2>
		<hr class="my-4" />
		<AppError v-if="error" :message="editError.message" />
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
					<button class="btn btn-primary" :disabled="editLoading">
						<template v-if="editLoading">
							<span
								class="spinner-grow spinner-grow-sm"
								aria-hidden="true"
							></span>
							<span class="visually-hidden" role="status">Loading...</span>
						</template>
						<template v-else> 수정 </template>
					</button>
				</div>
			</template>
		</PostForm>
	</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
import { getPostById, updatePost } from '@/api/post';
import PostForm from '@/components/posts/PostForm.vue';
import { useAlert } from '@/composables/alert';
import AppError from '@/components/app/AppError.vue';
import AppLoading from '@/components/app/AppLoading.vue';

const { vAlert, vSuccess } = useAlert();

const router = useRouter();
const route = useRoute();
const id = route.params.id;
const form = ref({
	title: null,
	content: null,
});
const error = ref(null);
const loading = ref(false);
const fetchPost = async () => {
	try {
		loading.value = true;
		const { data } = await getPostById(route.params.id);
		setForm(data);
	} catch (err) {
		console.log(err);
		vAlert('네트워크오류');
		error.value = err;
	} finally {
		loading.value = false;
	}
};
const setForm = ({ title, content }) => {
	form.value.title = title;
	form.value.content = content;
};
fetchPost();
const editError = ref(null);
const editLoading = ref(false);
const edit = async () => {
	try {
		editLoading.value = true;
		await updatePost(id, { ...form.value });
		await router.push({ name: 'PostDetail', params: { id } });
		vSuccess('수정이 완료되었습니다.');
	} catch (err) {
		console.error(err);
		vAlert('수정실패');
		editError.value = err;
	} finally {
		editLoading.value = false;
	}
};
const goDetailPage = () => {
	router.push({ name: 'PostDetail', params: { id } });
};
</script>

<style lang="scss" scoped></style>
