/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function App(): JSX.Element {
  return (
    <View style={styles.sectionView}>
      <View style={styles.sectionHeader} />
      <View style={styles.sectionContainer}>
        <Text style={styles.rowFlex1}>blue</Text>
        <View style={styles.sectionContainer1}>
          <Text style={styles.rowFlex2}>flex2</Text>
          <Text style={styles.rowFlex3}>flex3</Text>
          <Text style={styles.rowFlex4}>flex4</Text>
        </View>
      </View>
      <View style={styles.sectionFooder}>
        <Text>sss</Text>
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
});

export default App;
