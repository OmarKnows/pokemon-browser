import type { AxiosInstance } from 'axios';
import axios from 'axios';
import { SERVER } from '../constants/server';

const instance: AxiosInstance = axios.create({
	baseURL: SERVER.BASE_URL,
});

export default instance;
