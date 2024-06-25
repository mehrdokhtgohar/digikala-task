import React, {useCallback, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, RefreshControl} from 'react-native';
import {useRoute} from '@react-navigation/native';

import {usePostDetail} from '@hooks/usePosts';
import {useTranslation} from 'react-i18next';
import typography from '@theme/typography';
import colors from '@theme/colors';
import LoadingIndicator from '@components/loadingIndicator.component';

const PostDetail = () => {
  const {t} = useTranslation();
  const route = useRoute();
  const {postId} = (route?.params as {postId: number}) || {};

  const {data, error, isLoading, refetch} = usePostDetail(postId);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }, [refetch]);

  return !postId ? (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: typography.fonts.regular,
          fontSize: typography.fontSizes.medium,
          color: colors.text.secondary,
        }}>
        {t('DETAIL.EMPTY_LIST')}
      </Text>
    </View>
  ) : isLoading ? (
    <LoadingIndicator />
  ) : error ? (
    <View style={styles.container}>
      <Text>{t('DETAIL.ERROR')}</Text>
    </View>
  ) : (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <Text
        style={[
          styles.title,
          {
            fontFamily: typography.fonts.bold,
            fontSize: typography.fontSizes.large,
            color: colors.primary.dark,
          },
        ]}>
        {data?.title}
      </Text>
      <Text
        style={[
          styles.body,
          {
            fontFamily: typography.fonts.regular,
            fontSize: typography.fontSizes.medium,
            color: colors.text.secondary,
          },
        ]}>
        {data?.body}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {marginBottom: 8, textAlign: 'center'},
  body: {
    textAlign: 'center',
  },
});

export default PostDetail;
