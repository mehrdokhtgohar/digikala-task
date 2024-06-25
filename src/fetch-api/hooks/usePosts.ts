import {fetchPost, fetchPosts} from '@api/index';
import {Post} from '@customTypes/Posts.type';
import {useQuery} from '@tanstack/react-query';

export const usePosts = () => {
  return useQuery<Post[], Error>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });
};
export const usePostDetail = (postId: number) => {
  return useQuery<Post, Error>({
    queryKey: ['post', postId],
    queryFn: () => fetchPost(postId),
  });
};
