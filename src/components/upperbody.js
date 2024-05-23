import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import SvgIcon from '../assets/svgs/svgicon'
import Xml from '../utills/Xml'
import { theme } from './theme'

export default function Upperbody() {
  return (
    <LinearGradient
        colors={[theme.lightColor.darkGray, theme.lightColor.black]}>
        <View
          style={{
            height: '18%',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
        
        </View>
      </LinearGradient>
  )
}

const styles = StyleSheet.create({})