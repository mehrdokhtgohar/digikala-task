import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import i18n from '../../../language/i18n';
import {useTheme} from '../../../theme/hooks';

const SwitchLanguage = () => {
  const {theme} = useTheme();

  return (
    <View style={styles.languageContainer}>
      <TouchableOpacity onPress={() => i18n.changeLanguage('en')}>
        <Text
          style={{
            color:
              i18n.language === 'en'
                ? theme?.PRIMARY.REGULAR
                : theme?.PRIMARY.TEXT,
          }}>
          En
        </Text>
      </TouchableOpacity>
      <View
        style={[styles.columnLine, {backgroundColor: theme?.PRIMARY.TEXT}]}
      />
      <TouchableOpacity onPress={() => i18n.changeLanguage('fa')}>
        <Text
          style={[
            styles.languageText,
            {
              color:
                i18n.language === 'fa'
                  ? theme?.PRIMARY.REGULAR
                  : theme?.PRIMARY.TEXT,
            },
          ]}>
          fa
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SwitchLanguage;

const styles = StyleSheet.create({
  languageContainer: {
    flexDirection: 'row',
    marginVertical: 16,
    alignItems: 'center',
  },
  languageText: {fontSize: 14, fontFamily: 'Axiforma-Bold-FD'},
  columnLine: {
    width: 1,
    height: 11,
    marginHorizontal: 5,
  },
});
