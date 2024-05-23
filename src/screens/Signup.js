import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import TopHeader from '../components/TopHeader';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import {theme} from '../components/theme';
import Textinputbox from '../components/Textinputbox';
import Button from '../components/Button';

export default function Signup({navigation}) {
  const [inputEmail, setInputEmail] = useState('');
  const [emailError, setInputEmailError] = useState(true);
  const [focus, setFocus] = useState(false);
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
  return (
    <View style={{backgroundColor: '#000000', flex: 1}}>
      <FocusAwareStatusBar />
      <TopHeader />
      <View style={{marginTop: 70}}>
        <Text style={styles.heading}>What's your email address?</Text>
        <Textinputbox
          Value={inputEmail}
          onChangeHandler={e => validateEmail(e)}
          onFocusHandler={() => setFocus(true)}
          onBlurHandler={() => setFocus(false)}
          focus={focus}
        />
      </View>
      <Text style={styles.confirmEmailText}>
        You'll need to confirm this email later.
      </Text>
      <Button
      onpresshandler={()=>navigation.navigate('signUpPassword')}
        backgroundColor={
          emailError ? theme.lightColor.darkGray : theme.lightColor.gray
        }
        buttonText={'Next'}
        marginHorizontal={120}
        borderRadius={30}
        textStyle={{color: theme.lightColor.black}}
        marginTop={30}
        height={55}
        disabled={emailError}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    paddingLeft: 10,
    fontFamily: theme.fontFamily.AvenirNextCyrBold,
    fontSize: 32,
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
