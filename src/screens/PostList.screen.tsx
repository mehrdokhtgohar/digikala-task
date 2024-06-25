import LoadingIndicator from '@components/loadingIndicator.component';
import {PostItem} from '@components/PostItem.component';
import {usePosts} from '@hooks/usePosts';
import React, {useCallback, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, FlatList, RefreshControl} from 'react-native';

const PostsList = () => {
  const {t} = useTranslation();

  const {data, error, isLoading, refetch} = usePosts();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }, [refetch]);

  return isLoading ? (
    <LoadingIndicator />
  ) : error ? (
    <Text>
      {t('LIST.ERROR')} {error.message}
    </Text>
  ) : (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => <PostItem post={item} />}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={isLoading ? <LoadingIndicator /> : null}
    />
  );
};

export default PostsList;
