import { posts } from '@/api/index';

export function getPosts(params) {
	return posts.get('/', { params });
}

export function getPostById(id) {
	return posts.get(`/${id}`);
}

export function createPost(data) {
	return posts.post('/', data);
}
// put은 전체데이터, patch는 일부데이터 수정임
// export function updatePost(id, data) {
// 	return posts.put(`/${id}`, data);
// }
export function updatePost(id, data) {
	return posts.patch(`/${id}`, data);
}
export function deletePost(id) {
	return posts.delete(`/${id}`);
}
