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
import {theme} from '../components/theme';
import {albums} from '../utills/Constantdata';
import SvgIcon from '../assets/svgs/svgicon';
import Xml from '../utills/Xml';
import Playerscontrols from '../components/Playerscontrols';

export default function AlbumList() {
  const [searchValue, setSearchValue] = useState();
  const [playing, setPlaying] = useState(false);
  const handlePlayPause = () => {
    if (playing) {
      setPlaying(false);
    } else {
      setPlaying(true);
    }
  };
  return (
    <View style={{backgroundColor: '#000000', flex: 1}}>
      <View style={{flex: 1}}>
        <FocusAwareStatusBar />
        <TopHeader headingText={'Album list for you.'} />
        <SearchButton
          Value={searchValue}
          onChangeHandler={e => setSearchValue(e)}
        />
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Image
            source={require('../assets/images/Album.jpg')}
            style={styles.imgstyle}
          />
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.songName}>Love me Like you do</Text>

            <Text style={styles.artistName}>Billie Elish</Text>
          </View>
        </View>
        <View style={{marginTop: 30, marginBottom: 20}}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: theme.fontFamily.AvenirNextCyrBold,
              color: theme.lightColor.white,
              marginLeft: 20,
            }}>
            Next from : Love me Like you do
          </Text>
        </View>
        <View style={{flex: 1, marginTop: 30}}>
          <FlatList
            data={albums}
            keyExtractor={item => item.Name}
            showsVerticalScrollIndicator={false}
            bounces={false}
            renderItem={({item}) => (
              <View style={{flexDirection: 'row', marginBottom: 40}}>
                <TouchableOpacity
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 50,
                    borderWidth: 1,
                    borderColor: theme.lightColor.white,
                    marginLeft: 20,
                  }}></TouchableOpacity>
                <View style={{width: '75%'}}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: theme.fontFamily.AvenirNextCyrBold,
                      color: theme.lightColor.white,
                      marginLeft: 20,
                    }}>
                    {item.Name}
                  </Text>
                  <Text
                    style={{
                      marginLeft: 20,
                      fontSize: 14,
                      color: theme.lightColor.darkGray,
                      fontFamily: theme.fontFamily.AvenirNextCyrBold,
                    }}>
                    {item.Artist}
                  </Text>
                </View>
                <View>
                  <SvgIcon xmlPath={Xml.Menu} />
                </View>
              </View>
            )}
          />
        </View>
      </View>
      <Playerscontrols
        playing={playing}
        onpause={handlePlayPause}
        onPlay={handlePlayPause}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imgstyle: {
    marginLeft: 20,
    width: 50,
    height: 50,
  },
  songName: {
    color: theme.lightColor.green,
    fontSize: 16,
    fontFamily: theme.fontFamily.AvenirNextCyrBold,
    marginLeft: 10,
  },
  artistName: {
    color: theme.lightColor.gray,
    fontSize: 14,
    fontFamily: theme.fontFamily.AvenirNextCyrBold,
  },
});
