import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Post} from '@customTypes/Posts.type';
import colors from '@theme/colors';
import typography from '@theme/typography';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '@navigation/navigator';

interface PostItemProps {
  post: Post;
}

export const PostItem = ({post}: PostItemProps) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      style={[styles.container, {borderBottomColor: colors.border}]}
      onPress={() => navigation.navigate('PostDetail', {postId: post.id})}>
      <Text
        style={[
          styles.title,
          {
            fontFamily: typography.fonts.bold,
            fontSize: typography.fontSizes.large,
            color: colors.primary.dark,
          },
        ]}>
        {post.title}
      </Text>
      <Text
        style={{
          fontFamily: typography.fonts.regular,
          fontSize: typography.fontSizes.medium,
          color: colors.text.secondary,
        }}>
        {post.body}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
  },
  title: {
    marginBottom: 8,
  },
});
