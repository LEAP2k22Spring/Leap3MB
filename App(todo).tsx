/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useReducer} from 'react';
import {
  Button,
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
          <View style={styles.sectionList}>
            {state.list.map((value: string) => {
              return (
                <Text
                  style={{
                    color: 'black',
                  }}>
                  {value}
                </Text>
              );
            })}
          </View>
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
});

export default App;
let count = 1;
