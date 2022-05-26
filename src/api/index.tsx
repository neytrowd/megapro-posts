import axios from 'axios';
import { baseUrl } from '../constants/baseUrl';

export const api = axios.create({
   baseURL: baseUrl,
   params: {},
});

export const getPosts = async () => {
   const res = await api.get(`/posts`);
   return res.data;
};

export const getPost = async (id: string) => {
   const res = await api.get(`/posts/${id}`);
   return res.data;
};

export const getUsers = async () => {
   const res = await api.get(`/users`);
   return res.data;
};

export const getUser = async (id: string) => {
   const res = await api.get(`/users/${id}`);
   return res.data;
};

export const getComments = async (id: string) => {
   const res = await api.get(`/posts/${id}/comments`);
   return res.data;
};
