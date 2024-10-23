/**
 * Navigation.tsx
 *
 * This file sets up the navigation structure for the application using React Navigation.
 * It includes both stack and tab navigators.
 */

import {StyleSheet, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Colors from './Colors';
import Main from '../Screens/Main';
import ProductsSearch from '../Screens/ProductsSearch';
import ProductsDetails from '../Screens/ProductsDetails';
import About from '../Screens/About';
import {Product} from './Api/listings';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export type ParamList = {
  main: undefined; // No parameters expected for the Main screen
  productsSearch: undefined; // No parameters expected for the ProductsSearch screen
  productsDetails: Product; // ProductsDetails screen expects product parameters
  about: undefined; // No parameters expected for the About screen
};

/**
 * TabNavigation
 *
 * This component sets up the bottom tab navigation with three tabs: Main, ProductsSearch, and About.
 * Each tab has its own icon which changes based on whether the tab is focused.
 */

const TabNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;
          let iconActive;
          if (route.name === 'main') {
            iconName = require('../Images/home_icon.png');
            iconActive = require('../Images/home_icon_active.png');
          } else if (route.name === 'productsSearch') {
            iconName = require('../Images/search_icon.png');
            iconActive = require('../Images/seach_icon_active.png');
          } else if (route.name === 'about') {
            iconName = require('../Images/about_icon.png');
            iconActive = require('../Images/about_icon_active.png');
          }
          return (
            <Image
              source={focused ? iconActive : iconName}
              style={styles.icon}
            />
          );
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Colors.white,
        },
      })}>
      <Tab.Screen name="main" component={Main} options={{headerShown: false}} />
      <Tab.Screen
        name="productsSearch"
        component={ProductsSearch}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="about"
        component={About}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

/**
 * Navigation
 *
 * This component sets up the stack navigation for the application.
 * It includes a stack navigator with two screens: TabNavigation and ProductsDetails.
 */

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="tab_home"
          component={TabNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="productsDetails"
          component={ProductsDetails}
          options={{
            title: '',
            headerBackTitleVisible: false,
            headerTintColor: Colors.primary,
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

/**
 * styles
 *
 * This StyleSheet defines the styles used in the navigation components.
 */

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginTop: 10,
  },
});

export default Navigation;
