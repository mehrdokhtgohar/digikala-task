import {Post} from '@customTypes/Posts.type';
import axios from 'axios';

export const fetchPosts = async (): Promise<Post[]> => {
  const {data} = await axios.get<Post[]>(
    'https://jsonplaceholder.typicode.com/posts',
  );
  return data;
};
