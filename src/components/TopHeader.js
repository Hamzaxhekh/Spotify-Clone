import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import SvgIcon from '../assets/svgs/svgicon';
import Xml from '../utills/Xml';
import {theme} from './theme';

export default function TopHeader({heading = true, headingText}) {
  return (
    <View style={{flexDirection: 'row', marginTop: 30}}>
      <TouchableOpacity style={{marginLeft: 15,width:'7%'}}>
        <SvgIcon xmlPath={Xml.BackIcon} />
      </TouchableOpacity>
      <View style={{justifyContent:'center',alignItems:'center',width:'80%'}}>
      {heading && (
       
        <Text style={styles.topHeaderText}>
          
          {headingText ? headingText : 'Create Account'}
        </Text>
      
      )}
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topHeaderText: {
    fontSize: 16,
    fontFamily: theme.fontFamily.AvenirNextCyrBold,
    color: theme.lightColor.white,
    
  },
});
