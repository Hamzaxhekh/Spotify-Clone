import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import SvgIcon from '../assets/svgs/svgicon';
import Xml from '../utills/Xml';
import {theme} from '../components/theme';
import Upperbody from '../components/upperbody';
import Button from '../components/Button';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';

export default function Startscreen({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: '#000000'}}>
      <FocusAwareStatusBar/>
      <Upperbody />
      <View style={{alignItems: 'center'}}>
        <SvgIcon xmlPath={Xml.spotifyWhiteIcon} />
      </View>
      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: 100,
        }}>
        <Text style={styles.headingText}>Million of Songs.</Text>
        <Text style={styles.headingText}>Free on Spotify.</Text>
      </View>
      <Button
        backgroundColor={theme.lightColor.green}
        containerstyle={{marginTop: 80}}
        buttonText={'Sign up for Free'}
        textStyle={{color: theme.lightColor.black}}
        onpresshandler={()=>navigation.navigate('Signup')}
      />
      <Button
        buttonText={'Continue with Google'}
        iconxmlpath={Xml.GoogleColourICon}
        textStyle={{marginLeft: 30}}
      />
      <Button
        buttonText={'Continue with facebook'}
        iconxmlpath={Xml.Facebookcolouricon}
        textStyle={{marginLeft: 20}}
      />
      <TouchableOpacity onPress={()=> navigation.navigate('Login')}
        style={{marginTop: 15, alignItems: 'center', justifyContent: 'center'}}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: theme.fontFamily.AvenirNextCyrDemi,
            color: theme.lightColor.white,
          }}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 37,
    fontFamily: theme.fontFamily.AvenirNextCyrBold,
    color: theme.lightColor.white,
  },
});
