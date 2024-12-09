<template>
	<div>
		<h2>{{ form.title }}</h2>
		<p>{{ form.content }}</p>
		<p class="text-muted">{{ form.createdAt }}</p>
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
import { useRouter } from 'vue-router';
import { getPostById } from '@/api/post';
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
const form = ref({});
const fetchPost = () => {
	const data = getPostById(props.id);
	form.value = { ...data };
};
fetchPost();

const goListPage = () => router.push({ name: 'PostList' });
const goEditPage = () =>
	router.push({ name: 'PostEdit', params: { id: props.id } });
</script>

<style lang="scss" scoped></style>
