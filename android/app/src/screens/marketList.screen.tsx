import {
  Button,
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {MainList} from '../data/mainList';
import {useDispatch, useSelector} from 'react-redux';
import {setSortBy} from '../../../../store/marketListSclice';
import {MarketType} from '../types/market.type';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../../Navigator';

const MarketList = () => {
  const sortBy = useSelector(state => state.sorting.sortBy);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(MainList);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleSearch = text => {
    setSearchTerm(text);
    const filtered = MainList.filter(
      item =>
        item.name.en.toLowerCase().includes(text.toLowerCase()) ||
        item.name.fa.includes(text),
    );
    setFilteredData(filtered);
  };
  const handleSortByName = () => {
    dispatch(setSortBy('name'));
  };

  const handleSortByPrice = () => {
    dispatch(setSortBy('price'));
  };

  const handleSortByValue = () => {
    dispatch(setSortBy('value'));
  };
  const sortedItems = [...MainList].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.en.localeCompare(b.name.en);
    }
    if (sortBy === 'price') {
      return a.buy - b.buy;
    }
    if (sortBy === 'volume') {
      return b.financial.last24h.base_volume - a.financial.last24h.base_volume;
    }
    return 0;
  });
  const goToMarketDetail = item => {
    navigation.navigate('MarketDetail', {item});
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => goToMarketDetail(item)}>
        <View style={styles.itemContainer}>
          <Text style={styles.title}>{item.name.en}</Text>
          <Text style={styles.price}>Price: {item.buy}</Text>
          <Text style={styles.volume}>
            Volume: {item.financial.last24h.base_volume}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by name"
        onChangeText={handleSearch}
        value={searchTerm}
      />
      <Button title="Sort by Name" onPress={handleSortByName} />
      <Button title="Sort by Price" onPress={handleSortByPrice} />
      <Button title="Sort by Value" onPress={handleSortByValue} />
      <FlatList
        data={searchTerm ? filteredData : sortedItems}
        renderItem={renderItem}
        keyExtractor={item => item.pair_id.toString()}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

export default MarketList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    padding: 5,
  },
  flatListContent: {
    paddingBottom: 16,
  },
  itemContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    marginBottom: 4,
  },
  volume: {
    fontSize: 16,
    marginBottom: 4,
  },
  divider: {
    height: 1,
    backgroundColor: 'gray',
    marginBottom: 8,
  },
});
