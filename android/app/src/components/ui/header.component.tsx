import React from 'react';

import {PropsWithChildren} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import {useTheme} from '../../../theme/hooks';
import {useTranslation} from 'react-i18next';
import BackArrow from './icons/backArrow';
import i18n from '../../../language/i18n';

export interface HeaderProps extends PropsWithChildren {
  title?: string;
  hasBack?: boolean;
  shadow?: boolean;
  onPress?: () => void;
  hasToggleTheme?: boolean;
}

export const Header = ({
  title = '',
  children,
  hasBack = true,
  hasToggleTheme = true,
  onPress,
}: HeaderProps) => {
  const {theme, toggleTheme} = useTheme();
  const {t} = useTranslation();

  return (
    <View
      style={[styles.container, {backgroundColor: theme?.PRIMARY.BACKGROUND}]}>
      {children}
      {hasToggleTheme && (
        <View style={styles.leftActions}>
          <TouchableOpacity
            onPress={toggleTheme}
            style={[
              styles.toggleButton,
              {borderColor: theme?.PRIMARY.REGULAR},
            ]}>
            <Text
              style={{
                color: theme?.PRIMARY.REGULAR,
                fontFamily:
                  i18n.language === 'en'
                    ? 'Axiforma-Medium-FD'
                    : 'Vazir-Medium-FD',
              }}>
              {t('components.ui.toggleTheme')}
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <Text
        style={[
          styles.title,
          {
            color: theme?.PRIMARY.TEXT,
            fontFamily:
              i18n.language === 'en' ? 'Axiforma-Medium-FD' : 'Vazir-Medium-FD',
          },
        ]}
        numberOfLines={1}>
        {title}
      </Text>
      {hasBack && (
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <BackArrow color={theme?.PRIMARY.TEXT} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    alignSelf: 'stretch',
    elevation: 10,
    zIndex: 1,
  },
  title: {
    flex: 1,
    fontSize: 16,
    textAlign: 'right',
  },
  button: {justifyContent: 'center', alignItems: 'center', alignSelf: 'center'},
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
  },
  leftActions: {
    flexDirection: 'row',
    gap: 10,
  },
  toggleButton: {borderWidth: 1, borderRadius: 24, padding: 8},
});
