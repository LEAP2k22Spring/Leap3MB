/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import data from './data.json';
import {HandThumbUpIcon} from 'react-native-heroicons/solid';
function App(): JSX.Element {
  //   const [usersData, setUsersData] = useState([]);
  //   useEffect(() => {
  //     const getUsersData = async () => {
  //       try {
  //         const res = await axios.get(
  //           'http://www.omdbapi.com/?i=tt3896198&apikey=6b5eacc4',
  //         );

  //         setUsersData(res.data.data);
  //       } catch (error) {
  //         console.log('error', error);
  //       }
  //     };
  //     getUsersData();
  //   }, []);
  return (
    <View style={styles.sectionView}>
      <SafeAreaView>
        <Text style={{margin: 15, fontSize: 25, color: 'white'}}>Movies</Text>
        <ScrollView style={styles.scrollView}>
          {data.map((movieItem, id) => (
            <View key={id} style={styles.movieStyle}>
              <Image style={styles.image} source={{uri: movieItem.Poster}} />
              <View style={styles.title}>
                <View
                  style={{
                    flex: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: '#fff'}}>{movieItem.Title}</Text>
                </View>
                <View
                  style={{
                    flex: 2,
                    display: 'flex',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: '#fff'}}>{movieItem.Year}</Text>
                </View>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <HandThumbUpIcon />
              </View>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  sectionView: {
    height: '100%',
    backgroundColor: '#333',
  },
  movieStyle: {
    backgroundColor: '#6666',
    borderRadius: 10,
    height: 150,
    width: '100%',
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollView: {
    // backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  image: {
    width: 100,
    height: '100%',
    borderRadius: 10,
  },
  title: {
    display: 'flex',
    width: '50%',
    padding: 5,
  },
});

export default App;
