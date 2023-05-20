import React from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, View } from 'react-native';
=======
import { StyleSheet, View, Text } from 'react-native';
>>>>>>> c7b4b0fe9114f53ad0bd295478f61605c539adf4

export default function AppBar() {
  return (
    <View style={styles.appbar}>
      <View style={styles.appbarInner}>
        <Text style={styles.appbarTitle}>Memo App</Text>
        <Text style={styles.appbarRight}>ログアウト</Text>
      </View>
    </View>
  );
}

<<<<<<< HEAD
const styles=StyleSheet.create({
=======
const styles = StyleSheet.create({
>>>>>>> c7b4b0fe9114f53ad0bd295478f61605c539adf4
  appbar: {
    width: '100%',
    height: 104,
    backgroundColor: '#467FD3',
    justifyContent: 'flex-end',
  },
  appbarInner: {
    alignItems: 'center',
  },
  appbarRight: {
    position: 'absolute',
    right: 19,
    bottom: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  appbarTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
