import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {theme} from '../components/theme';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import TopHeader from '../components/TopHeader';
import Textinputbox from '../components/Textinputbox';
import Button from '../components/Button';

export default function Signuppassword({navigation}) {
  const [inputPassword, setInputPassword] = useState('');
  const [passwordError, setPasswordError] = useState(true);
  const [focus, setFocus] = useState(false);

  const validatePassword = e => {
    setInputPassword(e);
    if (e === '') {
      setPasswordError(true);
    } else if (e.length < 8) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };
  return (
    <View style={{backgroundColor: '#000000', flex: 1}}>
      <FocusAwareStatusBar />
      <TopHeader />
      <View style={{marginTop: 70}}>
        <Text style={styles.heading}>Create a password</Text>
        <Textinputbox
          Value={inputPassword}
          onChangeHandler={e => validatePassword(e)}
          onFocusHandler={() => setFocus(true)}
          onBlurHandler={() => setFocus(false)}
          focus={focus}
          rightIcon={true}
          secureText={true}
        />
      </View>
      <Text style={styles.confirmEmailText}>Use at least 10 characters</Text>
      <Button
        backgroundColor={
          passwordError ? theme.lightColor.darkGray : theme.lightColor.gray
        }
        onpresshandler={()=> navigation.navigate('Dateofbirth')}
        buttonText={'Next'}
        marginHorizontal={120}
        borderRadius={30}
        textStyle={{color: theme.lightColor.black}}
        marginTop={30}
        height={55}
        disabled={passwordError}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    paddingLeft: 10,
    fontFamily: theme.fontFamily.AvenirNextCyrBold,
    fontSize: 22,
    color: theme.lightColor.white,
  },
  confirmEmailText: {
    paddingLeft: 10,
    paddingTop: 5,
    fontFamily: theme.fontFamily.AvenirNextCyrMedium,
    fontSize: 12,
    color: theme.lightColor.white,
  },
});
