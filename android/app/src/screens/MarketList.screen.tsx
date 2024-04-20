/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {MainList} from '../data/mainList';
import {useDispatch, useSelector} from 'react-redux';
import {setSortBy} from '../../../../store/marketListSlice';
import {MarketType} from '../types/market.type';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../../navigation/navigator';
import {useTheme} from '../../theme/hooks';
import {useUpdateMainListData} from '../../../../store/action';
import {Page} from '../components/ui/page.component';
import {useTranslation} from 'react-i18next';
import i18n from '../../language/i18n';
import {RootState} from '../../../../store/store';
import {Header} from '../components/ui/header.component';
import CustomTextInput from '../components/ui/textInput.component';
import SwitchLanguage from '../components/ui/switchLanguage';
import TagSelector from '../components/ui/tagSelector.component';
interface Option {
  id: string;
  title: string;
}
const MarketList = () => {
  const sortBy = useSelector<RootState>(state => state.sorting.sortBy);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(MainList);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const {t} = useTranslation();
  const {theme} = useTheme();
  const dispatchUpdateMainListData = useUpdateMainListData();

  useEffect(() => {
    dispatchUpdateMainListData();
    const intervalId = setInterval(() => {
      dispatchUpdateMainListData();
    }, 20000);

    return () => clearInterval(intervalId);
  }, [dispatch, dispatchUpdateMainListData]);
  const handleSearch = (text: string) => {
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
      return b.financial?.last24h?.base_volume &&
        a.financial?.last24h?.base_volume
        ? b.financial?.last24h?.base_volume - a.financial?.last24h?.base_volume
        : 0;
    }
    return 0;
  });
  const sortingOptions = [
    {id: 'name', title: t('screens.MarketList.nameSort')},
    {id: 'price', title: t('screens.MarketList.priceSort')},
    {id: 'value', title: t('screens.MarketList.volumeSort')},
  ];
  const renderItem = useCallback<ListRenderItem<MarketType>>(
    ({item}) => {
      const goToMarketDetail = () => {
        navigation.navigate('MarketDetail', {item});
      };
      return (
        <TouchableOpacity onPress={() => goToMarketDetail()}>
          <View style={styles.itemContainer}>
            <Text
              style={[
                styles.title,
                {
                  color: theme?.PRIMARY.TEXT,
                  fontFamily:
                    i18n.language === 'en' ? 'Axiforma-Bold' : 'Vazir-Bold-FD',
                },
              ]}>
              {i18n.language === 'fa' ? item.name.fa : item.name.en}
            </Text>
            <View style={styles.rowContainer}>
              <Text
                style={[
                  styles.itemTitle,
                  {
                    color: theme?.PRIMARY.TEXT,
                    fontFamily:
                      i18n.language === 'en'
                        ? 'Axiforma-Bold'
                        : 'Vazir-Bold-FD',
                  },
                ]}>
                {t('screens.MarketList.priceTitle')}
              </Text>
              <Text style={[styles.itemTitle, {color: theme?.PRIMARY.TEXT}]}>
                {[item.buy]}
              </Text>
            </View>
            <View style={styles.rowContainer}>
              <Text
                style={[
                  styles.itemTitle,
                  {
                    color: theme?.PRIMARY.TEXT,
                    fontFamily:
                      i18n.language === 'en'
                        ? 'Axiforma-Bold'
                        : 'Vazir-Bold-FD',
                  },
                ]}>
                {t('screens.MarketList.volumeTitle')}
              </Text>
              <Text style={[styles.itemTitle, {color: theme?.PRIMARY.TEXT}]}>
                {item?.financial?.last24h?.base_volume}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    },
    [navigation, t, theme?.PRIMARY.TEXT],
  );
  const handleSortingOption = (option: Option) => {
    switch (option.id) {
      case 'name':
        handleSortByName();
        break;
      case 'price':
        handleSortByPrice();
        break;
      case 'value':
        handleSortByValue();
        break;
      default:
        break;
    }
  };
  return (
    <Page
      isScrollable={false}
      header={
        <Header title={t('screens.MarketList.listTitle')} hasBack={false} />
      }>
      <SwitchLanguage />
      <CustomTextInput
        style={{borderColor: theme?.PRIMARY.REGULAR}}
        onChangeText={handleSearch}
        value={searchTerm}
        placeholderTextColor={theme?.PRIMARY.TEXT}
        placeholder={t('screens.MarketList.placeholder')}
      />
      <TagSelector
        options={sortingOptions}
        onPress={handleSortingOption}
        mainTitle={t('screens.MarketList.sortTitle')}
      />
      <Text
        style={[
          styles.title,
          {
            color: theme?.PRIMARY.TEXT,
            fontFamily:
              i18n.language === 'en' ? 'Axiforma-Bold' : 'Vazir-Bold-FD',
          },
        ]}>
        {t('screens.MarketList.listTitle')}
      </Text>
      <FlatList
        data={searchTerm ? filteredData : sortedItems}
        renderItem={renderItem}
        keyExtractor={item => item.pair_id.toString()}
        contentContainerStyle={styles.flatListContent}
        // eslint-disable-next-line react/no-unstable-nested-components
        ItemSeparatorComponent={() => (
          <View
            style={[
              styles.divider,
              {backgroundColor: theme?.PRIMARY?.BORDER_COLOR || '#ccc'},
            ]}
          />
        )}
      />
    </Page>
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
  title: {fontSize: 18, marginRight: 8, marginVertical: 8},
  itemTitle: {
    fontSize: 16,
    marginBottom: 4,
    marginLeft: 8,
  },
  divider: {
    height: 1,
    marginBottom: 8,
  },
  rowContainer: {flexDirection: 'row-reverse'},
});
