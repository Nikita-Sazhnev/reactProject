import axios from 'axios'

export default class PostService {
	static async getAll() {
		const respond = await axios.get('https://jsonplaceholder.typicode.com/posts')
		return respond.data
	}
}