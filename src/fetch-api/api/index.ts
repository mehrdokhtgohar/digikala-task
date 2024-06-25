import {Post} from '@customTypes/Posts.type';
import axios from 'axios';

const fetchPosts = async (): Promise<Post[]> => {
  const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

const fetchPost = async (postId: number): Promise<Post> => {
  const {data} = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
  );
  return data;
};

export {fetchPosts, fetchPost};
