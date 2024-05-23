import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {theme} from './theme';
import SvgIcon from '../assets/svgs/svgicon';
import Xml from '../utills/Xml';

export default function Textinputbox({
  containerstyle,
  label,
  autoFocus,
  placeholder,
  Value,
  maxCharacter,
  keyboardType,
  focus,
  secureText = false,
  multilineText = false,
  editable = true,
  selectTextOnFocus = true,
  rightIcon = false,
  onChangeHandler = () => null,
  onBlurHandler = () => null,
  onFocusHandler = () => null,
  onPressHandler = () => null,
}) {
  return (
    <View style={containerstyle}>
      <Text>{label ? label : ''}</Text>
      <View>
        <TextInput
          autoFocus={autoFocus}
          placeholder={placeholder ? placeholder : ''}
          style={[
            styles.textInputStyle,
            {
              backgroundColor: focus? theme.lightColor.gray : theme.lightColor.darkGray
            },
          ]}
          value={Value}
          onChangeText={txt => onChangeHandler(txt)}
          onFocus={() => onFocusHandler()}
          onBlur={() => onBlurHandler()}
          returnKeyType="done"
          selectTextOnFocus={selectTextOnFocus}
          multiline={multilineText}
          keyboardType={keyboardType}
          maxLength={maxCharacter}
          editable={editable}
          secureTextEntry={secureText}></TextInput>
      </View>
      {rightIcon && (
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => onPressHandler()}>
          <SvgIcon xmlPath={Xml.showEyeIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  textInputStyle: {
    marginHorizontal: 10,
    borderWidth: 2,
    borderRadius: 6,
    paddingHorizontal: 12,
    color: theme.lightColor.white,
    fontSize: 15,
    fontFamily: theme.fontFamily.AvenirNextCyrBold,

    height: 48,
  },
  iconContainer: {
    height: 48,
    width: 48,
    position: 'absolute',
    top: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
