/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Appearance,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from 'react-native';

function App(): JSX.Element {
  const colorScheme = Appearance.getColorScheme();
  const [isEnabled, setIsEnabled] = useState(colorScheme === 'light');
  const [text, onChangeText] = useState('Hey');
  // const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  console.log(text);

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableNativeFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}>
          <View
            style={[
              styles.container,
              {
                backgroundColor: isEnabled ? 'white' : 'black',
              },
            ]}>
            <View style={{flex: 1, alignItems: 'flex-end', paddingRight: 20}}>
              <Switch
                trackColor={{false: '#767577', true: '#008000'}}
                thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
                ios_backgroundColor="#f4f3f4"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <Text style={{color: isEnabled ? 'black' : 'white'}}>
                {isEnabled ? 'Light mode' : 'Dark mode'}
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                keyboardType={'phone-pad'}
              />
            </View>
          </View>
        </TouchableNativeFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    paddingHorizontal: 24,
    backgroundColor: '#FFFF00',
    width: '100%',
    height: 100,
  },
  container: {
    display: 'flex',
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
