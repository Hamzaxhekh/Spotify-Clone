import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import TopHeader from '../components/TopHeader';
import {theme} from '../components/theme';
import Textinputbox from '../components/Textinputbox';
import Button from '../components/Button';

export default function Login({navigation}) {
  const [inputEmail, setInputEmail] = useState('');
  const [emailError, setInputEmailError] = useState(true);
  const [inputPassword, setInputPassword] = useState('');
  const [passwordError, setPasswordError] = useState(true);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [visibility, setVisibility] = useState(true);

  const validateEmail = e => {
    setInputEmail(e);
    let checkEmail = String(e).match(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    );

    if (e === '') {
      setInputEmailError(true);
    } else if (e.includes(' ')) {
      setInputEmailError(true);
    } else if (!checkEmail) {
      setInputEmailError(true);
    } else {
      setInputEmailError(false);
    }
  };
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
      <TopHeader heading={false} />
      <View style={{marginTop: 30}}>
        <Text style={styles.labelText}>Email</Text>

        <Textinputbox
          Value={inputEmail}
          onChangeHandler={e => validateEmail(e)}
          onFocusHandler={() => setEmailFocus(true)}
          onBlurHandler={() => setEmailFocus(false)}
          focus={emailFocus}

        />
      </View>
      <View style={{marginTop: 40}}>
        <Text style={styles.labelText}>Password</Text>
        <Textinputbox
          Value={inputPassword}
          onChangeHandler={e => validatePassword(e)}
          onFocusHandler={() => setPasswordFocus(true)}
          onBlurHandler={() => setPasswordFocus(false)}
          focus={passwordFocus}
          rightIcon={true}
          secureText={visibility}
          onPressHandler={() => setVisibility(!visibility)}
          
        />
      </View>

      <Button
        onpresshandler={() => navigation.navigate('AppStack')}
        backgroundColor={
          emailError || passwordError
            ? theme.lightColor.darkGray
            : theme.lightColor.gray
        }
        buttonText={'Login'}
        marginHorizontal={120}
        borderRadius={30}
        textStyle={{color: theme.lightColor.black}}
        marginTop={50}
        height={55}
        disabled={emailError || passwordError}
      />
      <Button
        buttonText={'Login wihtout password'}
        marginHorizontal={80}
        containerstyle={{marginLeft: 10}}
        marginTop={30}
        textStyle={{fontSize:12}}
        height={30}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  labelText: {
    fontSize: 30,
    color: theme.lightColor.white,
    fontFamily: theme.fontFamily.AvenirNextCyrBold,
    paddingLeft: 10,
  },
});
