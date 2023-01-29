/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useReducer, useRef} from 'react';
import {
  Animated,
  Button,
  Easing,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {HandThumbUpIcon} from 'react-native-heroicons/solid';

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
  // const colorScheme = Appearance.getColorScheme();
  // const [isEnabled, setIsEnabled] = useState(colorScheme === 'light');
  // const [count, setCount] = useState(0);
  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [state, dispatch] = useReducer(reducer, initialTodos);

  console.log(state);

  const handleAdd = () => {
    if (state.value === '') {
      return;
    }
    dispatch({type: 'ADD', id: count++, payload: state.value});
  };

  const translateA = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const translateB = useRef(new Animated.ValueXY({x: 1, y: 1})).current;
  const translateC = useRef(new Animated.ValueXY()).current;

  console.log(translateA);

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <View>
          <View style={styles.sectionHeader}>
            <HandThumbUpIcon />
            <Text>List</Text>
          </View>
          <View style={styles.sectionContainer}>
            <TextInput
              style={styles.input}
              value={state.value}
              onChangeText={text => dispatch({type: 'ONCHANGE', payload: text})}
              // keyboardType={'phone-pad'}
            />
            <View style={styles.buttonStyle}>
              <Button
                onPress={handleAdd}
                title="Add"
                color="#ffff"
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
          </View>
          <Button
            onPress={() => {
              Animated.timing(translateA, {
                toValue: 300,
                duration: 2000,
                easing: Easing.back(0),
                useNativeDriver: true,
              }).start(() => {
                Animated.timing(translateA, {
                  toValue: 0,
                  duration: 2000,
                  easing: Easing.back(0),
                  useNativeDriver: true,
                }).start();
              });
              Animated.timing(translateB, {
                toValue: {x: 2, y: 2},
                duration: 2000,
                easing: Easing.back(0),
                useNativeDriver: true,
              }).start(() => {
                Animated.timing(translateB, {
                  toValue: {x: 1, y: 1},
                  duration: 2000,
                  easing: Easing.back(0),
                  useNativeDriver: true,
                }).start();
              });
              Animated.timing(translateC, {
                toValue: {x: 1, y: 200},
                duration: 4000,
                easing: Easing.ease,
                useNativeDriver: true,
              }).start();
            }}
            title="Translate"
            color="black"
            accessibilityLabel="Learn more about this purple button"
          />
          <View style={styles.sectionList}>
            <Animated.View
              style={[
                styles.rectangle,
                {
                  transform: [
                    {translateX: translateA.x},
                    {translateY: translateA.y},
                  ],
                },
              ]}
            />
          </View>
          {/* <View style={styles.sectionList}>
            <Animated.View
              style={[
                styles.rectanglX,
                {
                  transform: [{scaleX: translateB.x}, {scaleY: translateB.y}],
                },
              ]}
            />
          </View> */}
          <View style={styles.sectionList}>
            <Animated.View
              style={[
                styles.rectanglX,
                {
                  // opacity: translateC.interpolate({
                  //   inputRange: [0, 50, 100],
                  //   outputRange: [0, 4, 1],
                  // }),
                  transform: [
                    {
                      translateY: translateA.y.interpolate({
                        inputRange: [0, 0.2, 0.4, 0.8, 1],
                        outputRange: [0, 100, 0, 100, 0],
                      }),
                    },
                    {translateX: translateA.x},
                  ],
                },
              ]}
            />
          </View>

          {/* <Button>Translate</Button> */}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 100,
    padding: 20,
  },
  sectionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  sectionList: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  buttonStyle: {
    backgroundColor: '#007AFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
  },
  container: {
    // display: 'flex',
    width: '100%',
    height: '100%',
  },
  input: {
    width: 200,
    height: 50,
    padding: 5,
    borderWidth: 1,
  },
  rectangle: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
  },
  rectanglX: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
  },
});

export default App;
let count = 1;
