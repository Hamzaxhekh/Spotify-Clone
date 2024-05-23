import {
  Pressable,
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

export default function SearchButton({
  autoFocus,
  placeholder,
  Value,
  maxCharacter,
  keyboardType,
  multilineText = false,
  editable = true,
  selectTextOnFocus = true,
  onChangeHandler = () => null,
  onBlurHandler = () => null,
  onFocusHandler = () => null,
}) {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      <Pressable style={styles.Searchbutton}>
        <SvgIcon xmlPath={Xml.SearchIcon} />
      </Pressable>
      <TextInput
        autoFocus={autoFocus}
        placeholder={placeholder ? placeholder : 'Search'}
        placeholderTextColor={theme.lightColor.darkGray}
        style={[
          styles.textInputStyle,
          {
            backgroundColor: theme.lightColor.white,
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
        editable={editable}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  Searchbutton: {
    height: 48,
    marginLeft: 20,
    backgroundColor: theme.lightColor.white,
    borderWidth: 2,
    borderRadius: 6,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '10%',
  },
  textInputStyle: {
    borderWidth: 2,
    borderLeftWidth: 0,
    borderRadius: 6,
    paddingHorizontal: 12,
    color: theme.lightColor.darkGray,
    fontSize: 15,
    fontFamily: theme.fontFamily.AvenirNextCyrBold,
    marginTop: 20,
    height: 48,
    width: '85%',
    marginRight: 10,
  },
});
