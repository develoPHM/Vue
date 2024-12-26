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
import PostForm from '@/components/posts/PostForm.vue';
import { useAlert } from '@/composables/alert';
import AppError from '@/components/app/AppError.vue';
import AppLoading from '@/components/app/AppLoading.vue';
import { useAxios } from '@/hooks/useAxios';

const router = useRouter();
const route = useRoute();
const id = route.params.id;
const { vAlert, vSuccess } = useAlert();
const { data: form, error, loading } = useAxios(`/posts/${id}`);

const {
	error: editError,
	loading: editLoading,
	execute,
} = useAxios(
	`/posts/${id}`,
	{ method: 'patch' },
	{
		immediate: false,
		onSuccess: () => {
			vSuccess('수정이 완료되었습니다.');
			router.push({ name: 'PostDetail', params: { id } });
		},
		onError: err => {
			vAlert(err.message);
		},
	},
);

const edit = () => {
	execute({
		...form.value,
	});
};

const goDetailPage = () => {
	router.push({ name: 'PostDetail', params: { id } });
};
</script>

<style lang="scss" scoped></style>
