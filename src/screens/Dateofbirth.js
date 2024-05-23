import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import TopHeader from '../components/TopHeader';
import DatePicker from 'react-native-date-picker';
import {theme} from '../components/theme';
import Button from '../components/Button';

export default function Dateofbirth({navigation}) {
  const [date, setDate] = useState(new Date());
  return (
    <View style={{backgroundColor: '#000000', flex: 1}}>
      <FocusAwareStatusBar />
      <TopHeader />
      <View style={{marginTop: 70}}>
        <Text style={styles.heading}>What's your date of birth?</Text>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 40,
          }}>
          <DatePicker
            date={date}
            mode="date"
            onDateChange={setDate}
            dividerColor={theme.lightColor.darkGray}
            style={styles.dateTimePicker}
          />
        </View>
      </View>
      <Button
        backgroundColor={theme.lightColor.white}
        buttonText={'Next'}
        marginHorizontal={120}
        borderRadius={30}
        textStyle={{color: theme.lightColor.black}}
        marginTop={30}
        height={55}
        onpresshandler={()=>navigation.navigate('Gender')}
      />
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
  dateTimePicker: {
    height: 200,
  },
});
