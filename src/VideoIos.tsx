import React, {memo, useCallback, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, Modal, View} from 'react-native';
import MyVideo from './components';

interface Props {
    title: string,
    url: string,
    onClose: () => void
}
export const VideoIos = memo(({url, title, onClose}:Props) => {
    const [visible, setVisible] = useState(true);

    const onCloseCB = useCallback(() => {
        setVisible(false);
        if (onClose) {
            onClose()
        }
    }, [visible, onClose]);


    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                <MyVideo
                    source={{ uri: url }}
                    title={title}
                    showFullscreenIcon={true}
                    autoPlay={true}
                    width='100%'
                    height={'100%'}
                    resizeMode={'contain'}
                    onBack={onCloseCB}
                />
            </View>
        </Modal>

    );
});

const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: '#111111',
       paddingTop: 30
   }
});
