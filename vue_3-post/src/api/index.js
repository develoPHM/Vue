import axios from 'axios';

function create(baseURL, options) {
	const instance = axios.create({
		baseURL,
		...options,
	});
	return instance;
}
export const posts = create(`${import.meta.env.VITE_APP_API_URL}/posts`);
// development: .env 의 변수를 덮어씀
