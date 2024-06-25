import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from './tabBar.component';
import PostsList from '@screens/PostList.screen';
import PostDetail from '@screens/PostDetail.screen';
import {RootStackParamList} from '@navigation/navigator';
import {useTranslation} from 'react-i18next';

const Tab = createBottomTabNavigator<RootStackParamList>();

const NavigationBar = () => {
  const {t} = useTranslation();

  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="PostList"
        component={PostsList}
        options={{headerTitle: t('HEADERS.POSTS')}}
      />
      <Tab.Screen
        name="PostDetail"
        component={PostDetail}
        options={{headerTitle: t('HEADERS.DETAIL')}}
      />
    </Tab.Navigator>
  );
};

export default NavigationBar;
