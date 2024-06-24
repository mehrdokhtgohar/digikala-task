import {fetchPosts} from '@api/index';
import {Post} from '@customTypes/Posts.type';
import {useQuery} from '@tanstack/react-query';

const usePosts = () => {
  return useQuery<Post[], Error>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });
};

export default usePosts;
