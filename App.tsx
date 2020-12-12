import React, {useCallback, useState} from 'react';
import {StyleSheet,View, TouchableOpacity, Text, Platform} from 'react-native';

import {VideoIos, VideoAndroid} from './src';

export default function App() {
  const [play, setPlay] = useState(false);
  const url = 'https://upload.basecdn.net/hls/20201030/tKL2umcH/HysF2ZdE/03975b1bcee96a648f64905796e9f039/playlist.m3u8';
  const title = 'Video Base';

  const onClose = useCallback(() => {
    setPlay(false)
  },[play]);

  return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btnPlay} onPress={() => {
          setPlay(true)
        }}>
          <Text style={styles.textPlay}>
            Play
          </Text>
        </TouchableOpacity>
        {
         play ? (Platform.OS === 'ios' ? <VideoIos url={url} title={title} onClose={onClose} /> : <VideoAndroid title={title} url={url} onClose={onClose}/>) : false
        }
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnPlay: {
    backgroundColor: '#0077cc',
    borderRadius: 4
  },
  textPlay: {
    color: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 20
  }
});
