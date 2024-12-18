<template>
	<div>
		<h2>게시글 목록</h2>
		<hr class="my-4" />
		<PostFilter
			v-model:title="params.title_like"
			v-model:limit="params._limit"
		></PostFilter>

		<hr class="my-4" />
		<AppGrid :items="posts">
			<template v-slot="{ item }">
				<PostItem
					:title="item.title"
					:content="item.content"
					:created-at="item.createdAt"
					@click="goPage(item.id)"
					@modal="openModal(item)"
				></PostItem>
			</template>
		</AppGrid>

		<AppPagination
			:currentPage="params._page"
			:pageCount="pageCount"
			@page="page => (params._page = page)"
		/>
		<!-- Modal -->
		<Teleport to="#modal">
			<PostModal
				v-model="show"
				:title="modalTitle"
				:contents="modalContents"
				:createdAt="modalCreatedAt"
			/>
		</Teleport>
		<!--게시글 미리보는 부분-->
		<template v-if="posts && posts.length > 0">
			<hr class="my-5" />
			<AppCard>
				<PostDetailView :id="posts[0].id"></PostDetailView>
			</AppCard>
		</template>
	</div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import AppCard from '@/components/AppCard.vue';
import AppPagination from '@/components/AppPagination.vue';
import AppGrid from '@/components/AppGrid.vue';
import PostFilter from '@/components/posts/PostFilter.vue';
import PostModal from '@/components/posts/PostModal.vue';
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
// fetchPosts();
watchEffect(fetchPosts);
const goPage = id => {
	// router.push(`/posts/${id}`);
	router.push({
		name: 'PostDetail',
		params: {
			id,
		},
	});
};
// modal
const show = ref(false);
const modalTitle = ref('');
const modalContents = ref('');
const modalCreatedAt = ref('');
const openModal = ({ title, content, createdAt }) => {
	show.value = true;
	modalTitle.value = title;
	modalContents.value = content;
	modalCreatedAt.value = createdAt;
};
</script>

<style lang="scss" scoped></style>
