import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {theme} from '../components/theme';
import TopHeader from '../components/TopHeader';
import Textinputbox from '../components/Textinputbox';
import SvgIcon from '../assets/svgs/svgicon';
import Xml from '../utills/Xml';
import Button from '../components/Button';

export default function Namescreen({navigation}) {
  const [name, setName] = useState('');
  const [nameerror, setNameError] = useState(true);
  const [focus, setFocus] = useState(false);
  const [firstTickicon, setFirstTickIcon] = useState(false);
  const [secondTickIcon, setSecondTickIcon] = useState(false);

  const validateFirstName = e => {
    setName(e);
    let checkFirstName = String(e).match(
      /^[A-Za-z\s\-!@#$%^&*()_+={}[\]:;"'<>,.?/\\|]+$/,
    );
    if (e === '') {
      setNameError(true);
    } else if (!checkFirstName) {
      setNameError(true);
    } else if (e.length < 2) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: theme.lightColor.black}}>
      <View style={{flex: 1}}>
        <TopHeader />
        <View style={{marginTop: 60}}>
          <Text style={styles.heading}>What's your name?</Text>
          <Textinputbox
            backgroundColor={
              name ? theme.lightColor.gray : theme.lightColor.white
            }
            Value={name}
            onChangeHandler={e => validateFirstName(e)}
            onFocusHandler={() => setFocus(true)}
            onBlurHandler={() => setFocus(false)}
            focus={focus}
          />
        </View>
        <Text style={styles.text}>This appears on your spotify profile</Text>
        <View style={styles.lineView}></View>
        <ScrollView>
          <Text style={[styles.text, styles.agreementText]}>
            By tapping on "Create Account", you agree to specific terms of use.
          </Text>
          <TouchableOpacity>
            <Text
              style={[
                styles.text,
                styles.agreementText,
                {color: theme.lightColor.green},
              ]}>
              Term's of use
            </Text>
          </TouchableOpacity>
          <Text style={[styles.text, styles.agreementText]}>
            To learn more about how spotify collect,uses,shares and protects
            your personal data,Please see the spotify Privacy Policy
          </Text>
          <TouchableOpacity>
            <Text
              style={[
                styles.text,
                styles.agreementText,
                {color: theme.lightColor.green},
              ]}>
              Privacy Policy
            </Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={[[styles.text, styles.agreementText, {width: '80%'}]]}>
              Please send me news and offers from spotify
            </Text>
            <TouchableOpacity
              style={styles.checkboxIcon}
              onPress={() => setFirstTickIcon(!firstTickicon)}>
              {firstTickicon && <SvgIcon xmlPath={Xml.Tickicon} />}
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={[styles.text, styles.agreementText, {width: '80%'}]}>
              Share my registration data with spotify's content providers for
              marketing purposes
            </Text>
            <TouchableOpacity
              style={styles.checkboxIcon}
              onPress={() => setSecondTickIcon(!secondTickIcon)}>
              {secondTickIcon && <SvgIcon xmlPath={Xml.Tickicon} />}
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <Button
      onpresshandler={()=> navigation.navigate('AppStack')}
        backgroundColor={
          nameerror ? theme.lightColor.gray : theme.lightColor.white
        }
        buttonText={'Create an Account'}
        disabled={nameerror}
        textStyle={{color: theme.lightColor.black}}
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
  text: {
    paddingLeft: 10,
    paddingTop: 5,
    fontFamily: theme.fontFamily.AvenirNextCyrMedium,
    fontSize: 12,
    color: theme.lightColor.white,
  },
  lineView: {
    marginHorizontal: 20,
    height: 4,
    backgroundColor: theme.lightColor.darkGray,
    marginTop: 70,
  },
  agreementText: {
    fontSize: 13,
    marginTop: 20,
    marginHorizontal: 10,
  },
  checkboxIcon: {
    borderWidth: 3,
    borderColor: theme.lightColor.darkGray,
    borderRadius: 50,
    backgroundColor: 'trasnparent',
    width: 25,
    height: 25,
    marginTop: 25,
  },
});
