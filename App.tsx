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
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
function App(): JSX.Element {
  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <View>
          <View style={styles.sectionHead}>
            <View style={styles.sectionHeadRigth}>
              <Image
                style={styles.image}
                source={require('./image/Logo.png')}
              />
            </View>
            <View style={styles.sectionHeadLeft}>
              <Image style={styles.card} source={require('./image/card.png')} />
            </View>
          </View>
          <View style={styles.sectionHeadBottom}></View>
          <View style={styles.sectionMenu}>
            <Text style={styles.menuTextStyle}>Special</Text>
            <Text style={styles.menuTextStyle}>Hot</Text>
            <Text style={styles.menuTextStyle}>Cold</Text>
            <Text style={styles.menuTextStyle}>Food</Text>
            <Text style={styles.menuTextStyle}>Blend</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionHead: {
    display: 'flex',
    flexDirection: 'row',
    padding:20
  },
  container: {
    // display: 'flex',
    width: '100%',
    height: '100%',
  },
  sectionHeadRigth: {
    flex: 6,
    alignItems: 'center',
  },
  sectionHeadLeft: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '70%',
    height: 30,
    resizeMode: 'contain',
  },
  card: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  sectionHeadBottom: {
    width:'100%',
    height:80,
    backgroundColor:'#2D2A2B'
  },
  sectionMenu:{
    display:'flex',
    flexDirection:'row',
  },
  menuTextStyle:{
    fontSize:20,
    paddingHorizontal:20,
    paddingVertical:10,
  }
});

export default App;
