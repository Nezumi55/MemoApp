<<<<<<< HEAD
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { string, shape, func } from 'prop-types';

import Icon from './Icon';

export default function CircleButton(props) {
  const { style, name, onPress } = props;
  return (
    <TouchableOpacity style={[styles.circleButton, style]} onPress={onPress}>
      <Icon name={name} size={40} color="white" />
    </TouchableOpacity>
=======
import { string } from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CircleButton(props) {
  const { children } = props;
  return (
    <View style={styles.circleButton}>
      <Text style={styles.circleButtonLabel}>{children}</Text>
    </View>
>>>>>>> c7b4b0fe9114f53ad0bd295478f61605c539adf4
  );
}

CircleButton.propTypes = {
<<<<<<< HEAD
  style: shape(),
  name: string.isRequired,
  onPress: func,
};

CircleButton.defaultProps = {
  style: null,
  onPress: null,
=======
  children: string.isRequired,
>>>>>>> c7b4b0fe9114f53ad0bd295478f61605c539adf4
};

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: '#467FD3',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
<<<<<<< HEAD
    elevation: 8,
=======
    elevation: 8, // Android用の影
>>>>>>> c7b4b0fe9114f53ad0bd295478f61605c539adf4
  },
  circleButtonLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 40,
  },
});
