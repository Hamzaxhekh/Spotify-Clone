import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../components/Button';
import {theme} from '../components/theme';
import TopHeader from '../components/TopHeader';

export default function Gender({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: theme.lightColor.black}}>
      <TopHeader />

      <View style={{marginTop: 70}}>
        <Text style={styles.heading}>What's your gender?</Text>
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <Button
            buttonText={'Female'}
            marginHorizontal={10}
            containerstyle={{marginLeft: 10}}
            textStyle={{marginHorizontal: 10}}
            onpresshandler={() => navigation.navigate('Namescreen')}
          />
          <Button
            buttonText={'Male'}
            marginHorizontal={10}
            textStyle={{marginHorizontal: 7}}
            onpresshandler={() => navigation.navigate('Namescreen')}
          />
          <Button
            buttonText={'Prefer not to say'}
            marginHorizontal={10}
            textStyle={{marginHorizontal: 7}}
            onpresshandler={() => navigation.navigate('Namescreen')}

          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    paddingLeft: 10,
    fontFamily: theme.fontFamily.AvenirNextCyrBold,
    fontSize: 30,
    color: theme.lightColor.white,
  },
});
