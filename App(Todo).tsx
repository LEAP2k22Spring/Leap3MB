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
  TouchableOpacity,
  View,
} from 'react-native';
import {
  XMarkIcon,
  PencilSquareIcon,
  CheckIcon,
} from 'react-native-heroicons/solid';

const initialTodos = {
  list: [],
  value: '',
};
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD':
      return {...state, value: '', list: [...state.list, action.payload]};
    case 'DELETE':
      return {
        ...state,
        list: [
          ...state.list.filter((todo: any, index: any) => {
            return index !== action.index;
          }),
        ],
      };
    case 'EDIT':
      return {...state, edit: action.index, editText: action.text};
    case 'ONCHANGEEDIT':
      return {...state, editText: action.payload};
    case 'SAVE':
      return {
        ...state,
        edit: '',
        editText: '',
        list: [
          ...state.list.map((todo: any, index: any) => {
            // return "ss"
            if (index === action.index) {
              return state.editText;
            } else return todo;
          }),
        ],
      };
    case 'ONCHANGE':
      return {...state, value: action.payload};
  }
};

function App(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialTodos);
  console.log('state-', state);

  const handleAdd = () => {
    if (state.value === '') {
      return;
    }
    dispatch({type: 'ADD', payload: state.value});
  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <View>
          <View style={styles.sectionHeader}>
            <Text style={{fontSize: 40}}>List</Text>
          </View>
          <View style={styles.sectionContainer}>
            <TextInput
              style={styles.input}
              value={state.value}
              onChangeText={text => dispatch({type: 'ONCHANGE', payload: text})}
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
            {state.list.map((value: string, index: any) => {
              return (
                <View style={styles.sectionListItems} key={index}>
                  {state.edit !== index ? (
                    <Text style={styles.todoText}>{value}</Text>
                  ) : (
                    <TextInput
                      style={styles.input}
                      value={state.editText}
                      onChangeText={text =>
                        dispatch({type: 'ONCHANGEEDIT', payload: text})
                      }
                    />
                  )}

                  {state.edit !== index ? (
                    <TouchableOpacity
                      onPress={() =>
                        dispatch({type: 'EDIT', index: index, text: value})
                      }>
                      <>
                        <PencilSquareIcon />
                      </>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() => dispatch({type: 'SAVE', index: index})}>
                      <>
                        <CheckIcon />
                      </>
                    </TouchableOpacity>
                  )}
                  <TouchableOpacity
                    onPress={() => dispatch({type: 'DELETE', index: index})}>
                    <>
                      <XMarkIcon />
                    </>
                  </TouchableOpacity>
                </View>
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
    justifyContent: 'center',
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
    flexDirection: 'column',
  },
  sectionListItems: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 10,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#007AFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
  },
  container: {
    width: '100%',
    height: '100%',
  },
  input: {
    width: 200,
    height: 50,
    padding: 5,
    borderWidth: 1,
  },
  todoText: {
    width: 200,
    padding: 15,
    backgroundColor: '#3333',
  },
});

export default App;
