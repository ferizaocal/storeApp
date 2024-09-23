import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';

export default function Input({
  placeholder,
  onType,
  value,
  iconName,
  isSecure,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onType}
        value={value}
        secureTextEntry={isSecure}
      />
      <FontAwesomeIcon icon={iconName} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    borderColor: '#64b5f6',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
  },
});
