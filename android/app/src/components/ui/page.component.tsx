import {
  ScrollView,
  ScrollViewProps,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import React, {forwardRef, PropsWithChildren, ReactNode} from 'react';
import {useTheme} from '../../../theme/hooks';
export interface PageProps extends PropsWithChildren {
  isScrollable?: boolean;
  style?: ViewStyle;
  header?: ReactNode;
  onScroll?: ScrollViewProps['onScroll'];
}
export const Page = forwardRef(
  (
    {children, isScrollable = false, header = null, onScroll, style}: PageProps,
    ref: React.Ref<ScrollView | View> | null,
  ) => {
    const {theme} = useTheme();

    if (isScrollable) {
      return (
        <>
          {header}
          <ScrollView
            ref={ref as React.Ref<ScrollView>}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[
              styles.scrollContentContainer,
              {backgroundColor: theme?.PRIMARY.BACKGROUND},
              style,
            ]}
            onScroll={onScroll}
            scrollEventThrottle={32}>
            {children}
          </ScrollView>
        </>
      );
    }
    return (
      <>
        {header}
        <View
          ref={ref as React.Ref<View>}
          style={[
            styles.scrollContentContainer,
            {backgroundColor: theme?.PRIMARY.BACKGROUND},
            style,
          ]}>
          {children}
        </View>
      </>
    );
  },
);

const styles = StyleSheet.create({
  scrollContentContainer: {
    flexGrow: 1,
    paddingHorizontal: 16,
  },
});
