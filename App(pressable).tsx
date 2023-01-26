/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): JSX.Element {
  const [timesPressed, setTimesPressed] = useState(0);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.sectionView}>
      <View style={styles.sectionHeader} />
      <Switch
        trackColor={{false: '#767577', true: '#008000'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#f4f3f4"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <View style={styles.sectionContainer}>
        <View style={{display: 'flex'}}>
          <Pressable
            style={styles.buttonStyle}
            onPress={() => {
              setTimesPressed(current => current + 1);
            }}>
            <Text>I'm pressable!</Text>
          </Pressable>
          <Pressable
            style={styles.buttonStyle}
            onPress={() => {
              setTimesPressed(0);
            }}>
            <Text>Reset</Text>
          </Pressable>
          <Text style={styles.rowFlex1}>OnPress-{timesPressed}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            console.log('TouchableOpacity');
          }}>
          <View style={{backgroundColor: 'blue', width: 300, height: 300}}>
            <Text>This is view</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionView: {
    height: '100%',
  },
  sectionContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
  },
  sectionContainer1: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
  },
  sectionHeader: {
    paddingHorizontal: 24,
    backgroundColor: '#FFFF00',
    width: '100%',
    height: 100,
  },
  sectionFooder: {
    paddingHorizontal: 24,
    backgroundColor: '#FF0000',
    width: '100%',
    height: 100,
  },
  rowFlex1: {
    backgroundColor: '#0000FF',
    height: '100%',
    width: 100,
    color: '#FFFFFF',
  },
  rowFlex2: {
    backgroundColor: '#C0C0C0',
    height: 120,
    width: '100%',
  },
  rowFlex3: {
    backgroundColor: '#fff',
    width: '100%',
    flex: 1,
  },
  rowFlex4: {
    backgroundColor: '#008000',
    height: 150,
    width: '100%',
  },
  buttonStyle: {
    padding: 10,
    backgroundColor: '#3333',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
