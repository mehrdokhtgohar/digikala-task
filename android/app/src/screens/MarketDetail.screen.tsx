/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Page} from '../components/ui/page.component';
import {RootStackParamList} from '../../../../navigation/navigator';
import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Header} from '../components/ui/header.component';
import {useTranslation} from 'react-i18next';
import i18n from '../../language/i18n';
import {useTheme} from '../../theme/hooks';

type MarketDetailProps = NativeStackScreenProps<
  RootStackParamList,
  'MarketDetail'
>;
const MarketDetail = () => {
  const {
    params: {item},
  } = useRoute<MarketDetailProps['route']>();
  const {t} = useTranslation();
  const {theme} = useTheme();
  const navigation = useNavigation();
  return (
    <Page
      header={
        <Header
          title={t('screens.MarketDetail.title')}
          hasToggleTheme={false}
          shadow={false}
          onPress={() => navigation.goBack()}
        />
      }
      style={styles.mainContainer}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: theme?.PRIMARY.BACKGROUND,
          },
        ]}>
        <Text
          style={[
            styles.title,
            {
              fontFamily:
                i18n.language === 'fa' ? 'Vazir-Bold-FD' : 'Axiforma-Bold',
              color: theme?.PRIMARY.TEXT,
            },
          ]}>
          {item.name.fa && `(${item.name.fa})`} {item.name.en}
        </Text>
        <Image source={{uri: item.logo}} style={styles.logo} />
      </View>
      <Text
        style={[
          styles.coinInfo,
          {
            fontFamily:
              i18n.language === 'fa' ? 'Vazir-Medium-FD' : 'Axiforma-Medium-FD',
            textAlign: i18n.language === 'fa' ? 'right' : 'left',
            color: theme?.PRIMARY.TEXT,
          },
        ]}>
        {t('screens.MarketDetail.salesTitle', {
          coinName: i18n.language === 'fa' ? item.name.fa : item.name.en,
        })}
      </Text>
      <View style={styles.priceContainer}>
        <View
          style={[
            styles.rowContainer,
            {borderColor: theme?.PRIMARY.BORDER_COLOR},
          ]}>
          <Text
            style={[
              styles.priceTitle,
              {
                fontFamily:
                  i18n.language === 'fa' ? 'Vazir-Bold-FD' : 'Axiforma-Bold',
                color: theme?.PRIMARY.TEXT,
              },
            ]}>
            {t('screens.MarketDetail.priceTitle')}
          </Text>
          <Text style={[styles.priceTitle, {color: theme?.PRIMARY.TEXT}]}>
            {item.sell}
          </Text>
        </View>
        <View
          style={[
            styles.rowContainer,
            {borderColor: theme?.PRIMARY.BORDER_COLOR},
          ]}>
          <Text
            style={[
              styles.priceTitle,
              {
                fontFamily:
                  i18n.language === 'fa' ? 'Vazir-Bold-FD' : 'Axiforma-Bold',
                color: theme?.PRIMARY.TEXT,
              },
            ]}>
            {t('screens.MarketDetail.changeTitle')}
          </Text>
          <Text
            style={[
              styles.priceTitle,
              {
                color:
                  item?.financial?.last24h?.change_percent < 0
                    ? theme?.PRIMARY.RED
                    : theme?.PRIMARY.GREEN,
              },
            ]}>
            {item.financial?.last24h.change_percent}%
          </Text>
        </View>
      </View>
    </Page>
  );
};

export default MarketDetail;

const styles = StyleSheet.create({
  logo: {
    width: 50,
    aspectRatio: 1,
  },
  mainContainer: {alignItems: 'flex-end'},
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  title: {fontSize: 18, marginRight: 8, flex: 1},
  coinInfo: {fontSize: 16, marginVertical: 16},
  priceContainer: {
    width: '100%',
    justifyContent: 'space-between',
  },
  rowContainer: {
    marginVertical: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
  },
  priceTitle: {fontSize: 14},
});
