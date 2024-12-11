<template>
	<div>
		<h2>게시글 목록</h2>
		<form @submit.prevent>
			<div class="row g-3">
				<div class="col">
					<!--필터 구현하는 부분-->
					<input v-model="params.title_like" type="text" class="form-control" />
				</div>
				<!-- 몇개씩 볼지 정하는 부분-->
				<div class="col">
					<select v-model="params._limit" class="form-select">
						<option value="3">3개씩 보기</option>
						<option value="6">6개씩 보기</option>
						<option value="9">9개씩 보기</option>
					</select>
				</div>
			</div>
		</form>
		<hr class="my-4" />
		<div class="row g-3">
			<div v-for="post in posts" :key="post.id" class="col-4">
				<PostItem
					:title="post.title"
					:content="post.content"
					:created-at="post.createdAt"
					@click="goPage(post.id)"
				></PostItem>
			</div>
		</div>
		<!--페이징 구현하는 부분-->
		<nav class="mt-5" aria-label="Page navigation example">
			<ul class="pagination justify-content-center">
				<li class="page-item">
					<a
						class="page-link"
						:class="{ disabled: params._page === 1 }"
						href="#"
						aria-label="Previous"
						@click.prevent="--params._page"
					>
						<span aria-hidden="true">&laquo;</span>
					</a>
				</li>
				<li
					v-for="page in pageCount"
					:key="page"
					class="page-item"
					:class="{ active: params._page === page }"
				>
					<a class="page-link" href="#" @click.prevent="params._page = page">{{
						page
					}}</a>
				</li>
				<li class="page-item" :class="{ disabled: params._page === pageCount }">
					<a
						class="page-link"
						href="#"
						aria-label="Next"
						@click.prevent="++params._page"
					>
						<span aria-hidden="true">&raquo;</span>
					</a>
				</li>
			</ul>
		</nav>
		<hr class="my-5" />
		<!--게시글 미리보는 부분-->
		<AppCard>
			<PostDetailView :id="1"></PostDetailView>
		</AppCard>
	</div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import AppCard from '@/components/AppCard.vue';
import { getPosts } from '@/api/post';
import { computed, ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const posts = ref([]);
const params = ref({
	_sort: 'createdAt', // 날짜별로 정렬
	_order: 'desc', // 내림차순
	_limit: 3, // 최대 몇개 띄울지
	_page: 1, // 페이지숫자
	title_like: '', // 필터
});
// pagination
const totalCount = ref(0);
const pageCount = computed(() =>
	Math.ceil(totalCount.value / params.value._limit),
);
const fetchPosts = async () => {
	try {
		const { data, headers } = await getPosts(params.value);
		posts.value = data;
		totalCount.value = parseInt(headers['x-total-count']);
	} catch (err) {
		console.error(err);
	}
};
console.log(totalCount.value);
fetchPosts();
watchEffect(fetchPosts);
const goPage = id => {
	// router.push(`/posts/${id}`);
	router.push({
		name: 'PostDetail',
		params: {
			id,
		},
		query: {
			searchText: 'hello',
		},
		hash: '#world',
	});
};
</script>

<style lang="scss" scoped></style>
