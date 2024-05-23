import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {theme} from './theme';
import SvgIcon from '../assets/svgs/svgicon';
import Xml from '../utills/Xml';

export default function Playerscontrols({playing, onpause, onPlay}) {
  return (
    <View
      style={{
        backgroundColor: theme.lightColor.black,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <TouchableOpacity style={{marginBottom: 20, marginTop: 10}}>
        <SvgIcon xmlPath={Xml.Backward} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={playing ? onpause : onPlay}
        style={{marginBottom: 20, marginTop: 10}}>
        {playing ? (
          <SvgIcon xmlPath={Xml.Videopause} />
        ) : (
          <SvgIcon xmlPath={Xml.Videoplay} />
        )}
      </TouchableOpacity>
      <TouchableOpacity style={{marginBottom: 20}}>
        <SvgIcon xmlPath={Xml.Forward} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
