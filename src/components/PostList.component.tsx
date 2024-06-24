import usePosts from '@hooks/usePosts';
import React from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

const PostsList: React.FC = () => {
  const {data, error, isLoading} = usePosts();
  console.log(data, 'data');
  if (isLoading) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item.title}</Text>
          <Text>{item.body}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontWeight: 'bold',
  },
});

export default PostsList;
