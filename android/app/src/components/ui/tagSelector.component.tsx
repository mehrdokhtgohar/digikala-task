/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useTheme} from '../../../theme/hooks';
import i18n from '../../../language/i18n';

interface Option {
  id: string;
  title: string;
}

interface ChipProps {
  title: string;
  onPress: () => void;
  selected: boolean;
  chipColor: string;
  textColor: string;
  fontFamily: string;
}

interface ChipGroupProps {
  options: Option[];
  onPress: (option: Option) => void;
  mainTitle: string;
}

const Chip: React.FC<ChipProps> = ({
  title,
  onPress,
  selected,
  chipColor,
  textColor,
  fontFamily,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.chip, {backgroundColor: selected ? chipColor : '#e0e0e0'}]}>
    <Text
      style={[
        styles.title,
        {color: selected ? '#fff' : textColor, fontFamily},
      ]}>
      {title}
    </Text>
  </TouchableOpacity>
);

const TagSelector: React.FC<ChipGroupProps> = ({
  options,
  onPress,
  mainTitle,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const {theme} = useTheme();

  const handleSelect = (option: Option) => {
    setSelectedOption(option.id);
    onPress(option);
  };

  return (
    <>
      <Text
        style={[
          styles.mainTitle,
          {
            color: theme?.PRIMARY.TEXT,
            fontFamily:
              i18n.language === 'en' ? 'Axiforma-Bold' : 'Vazir-Bold-FD',
          },
        ]}>
        {mainTitle}
      </Text>
      <View style={styles.container}>
        {options.map(option => (
          <Chip
            key={option.id}
            title={option.title}
            onPress={() => handleSelect(option)}
            selected={selectedOption === option.id}
            chipColor={theme?.PRIMARY.REGULAR || '#4CAF50'}
            textColor={theme?.PRIMARY.TEXT || '#333'}
            fontFamily={
              i18n.language === 'en' ? 'Axiforma-Medium' : 'Vazir-Medium-FD'
            }
          />
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  chip: {
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 14,
  },
  mainTitle: {marginVertical: 8},
});

export default TagSelector;
