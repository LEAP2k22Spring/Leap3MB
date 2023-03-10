/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useReducer, useRef, useState} from 'react';
import {
  Animated,
  Button,
  Easing,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
import {transformer} from './metro.config';

const initialTodos = {
  list: [],
  value: '',
};
const reducer = (state: any, action: any) => {
  // list.push(action)
  // [{}.]
  switch (action.type) {
    case 'ADD':
      return {...state, list: [...state.list, action.id, action.payload]};
    case 'DELETE':
      return state.filter((todo: any) => todo.id === action.id);
    case 'ONCHANGE':
      return {...state, value: action.payload};
  }
};

function App(): JSX.Element {
  const translateImage1 = useRef(new Animated.Value(0)).current;
  const translateImage2 = useRef(new Animated.Value(0)).current;
  const translateSun = useRef(new Animated.Value(0)).current;
  const translateSun1 = useRef(new Animated.ValueXY({x:100, y:400})).current;
  const translateMoon = useRef(new Animated.Value(0)).current;
  const translateMoon1 = useRef(new Animated.ValueXY({x:0, y:0})).current;
  const translateTail = useRef(new Animated.Value(0)).current;
  const translateTail1 = useRef(new Animated.ValueXY({x:0, y:0})).current;
  

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(translateImage1, {
        toValue: isEnabled ? 0 : 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(translateImage2, {
        toValue: isEnabled ? 1 : 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(translateSun, {
        toValue: isEnabled ? 0 : 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(translateSun1, {
        toValue: isEnabled ? {x: 300, y: 200} :{x: 100, y: 400},
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(translateMoon, {
        toValue: isEnabled ? 1 : 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(translateMoon1, {
        toValue: isEnabled ? {x: 100, y: 300} :{x: 10, y: 500},
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(translateTail, {
        toValue: isEnabled ? 1 : 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(translateTail1, {
        toValue: isEnabled ? {x: 100, y: 300} :{x: 50, y: 600},
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, [isEnabled, translateImage1, translateImage2]);
  return (
    <>
      <SafeAreaView>
        <Animated.View>
          <Switch
            trackColor={{false: '#767577', true: '#008000'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#f4f3f4"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </Animated.View>
        <View style={styles.sectionHeader}>
          <Animated.Image
            style={[styles.image, {opacity: translateImage1}]}
            source={require('./image/day.png')}
          />
          <Animated.Image
            style={[styles.image, {opacity: translateImage2}]}
            source={require('./image/nigth.png')}
          />
          <Animated.Image
            style={[
              styles.sunImage,
              {opacity: translateSun, transform: [{translateX: translateSun1.x},
                {translateY: translateSun1.y},]},
            ]}
            source={require('./image/sun.png')}
          />
          <Animated.Image
            style={[
              styles.moonImage,
              {opacity: translateMoon, transform: [{translateX: translateMoon1.x},
                {translateY: translateMoon1.y},]},
            ]}
            source={require('./image/moon.png')}
          /><Animated.Image
          style={[
            styles.tailImage,
            {opacity: translateTail, transform: [{translateX: translateTail1.x},
              {translateY: translateTail1.y},]},
          ]}
          source={require('./image/tailwind.png')}
        />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  sunImage: {
    width: 50,
    height: 50,
    position: 'absolute',

  },
  moonImage: {
    width: 50,
    height: 50,
    position: 'absolute',
    resizeMode: 'contain',
  },
  tailImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    resizeMode: 'contain',
  },
});

export default App;
