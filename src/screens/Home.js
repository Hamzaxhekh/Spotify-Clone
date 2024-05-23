import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import TopHeader from '../components/TopHeader';
import SearchButton from '../components/SearchButton';
import {artists} from '../utills/Constantdata';
import Button from '../components/Button';
import {theme} from '../components/theme';

export default function Home({navigation}) {
  const [searchValue, setSearchValue] = useState();
  return (
    <View style={{backgroundColor: '#000000', flex: 1}}>
      <View style={{flex: 1}}>
        <FocusAwareStatusBar />
        <TopHeader headingText={'Choose 3 or more artists you like.'} />
        <SearchButton
          Value={searchValue}
          onChangeHandler={e => setSearchValue(e)}
        />

        <FlatList
          data={artists}
          numColumns={3}
          keyExtractor={item => item.Name}
          style={styles.flatlistcontainer}
          showsVerticalScrollIndicator={false}
          bounces={false}
          renderItem={({item}) => (
            <View
              style={{
                marginTop: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View style={styles.image}>
                <Image source={item.imagesource} style={styles.imgStyle} />
              </View>
              <Text style={styles.artistName}>{item.Name}</Text>
            </View>
          )}
        />
      </View>
      <Button
        backgroundColor={theme.lightColor.white}
        buttonText={'Album List'}
        textStyle={{color: theme.lightColor.black}}
        marginTop={10}
        onpresshandler={()=> navigation.navigate('AlbumList')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    marginBottom: 0,
    marginHorizontal: 20,
  },
  imgStyle: {
    height: '100%',
    width: '100%',
    borderRadius: 50,
  },
});
