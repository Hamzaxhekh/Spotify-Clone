import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import SvgIcon from '../assets/svgs/svgicon';
import {theme} from './theme';

export default function Button({
  containerstyle,
  disabled= false,
  borderRadius,
  backgroundColor,
  onpresshandler = () => null,
  iconxmlpath,
  textStyle,
  buttonText,
  marginBottom,
  marginHorizontal,
  marginTop,
  height
}) {
  return (
    <View style={containerstyle}>
      <TouchableOpacity
      disabled={disabled}
        onPress={() => onpresshandler()}
        style={{
          borderRadius: borderRadius ? borderRadius : 20,
          backgroundColor: backgroundColor ? backgroundColor : 'transparent',
          marginTop:marginTop? marginTop : 0,
          alignItems: 'center',
          justifyContent: iconxmlpath ? 'flex-start' : 'center',
          height: height ? height :45,
          marginBottom: marginBottom ? marginBottom : 10,
          flexDirection: 'row',
          borderWidth: 2,
          borderColor: theme.lightColor.darkGray,
          marginHorizontal: marginHorizontal ? marginHorizontal : 40,
        }}>
        {iconxmlpath && (
          <View style={{marginLeft: 10}}>
            <SvgIcon xmlPath={iconxmlpath} />
          </View>
        )}
        <Text
          style={[
            {
              fontSize: 16,
              color: theme.lightColor.white,
              fontFamily: theme.fontFamily.AvenirNextCyrBold,
            },
            textStyle,
          ]}>
          {buttonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
