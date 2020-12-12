import React, {memo, useCallback} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import GiraffePlayer2 from 'react-native-giraffeplayer2';

interface Props {
    title: string,
    url: string,
    onClose: () => void
}
export const VideoAndroid = memo(({title, url, onClose}: Props) => {
    const onCloseCB = useCallback(() => {
        if (onClose) {
            onClose();
        }
    }, [onClose]);

    React.useEffect(() => {
        // @ts-ignore
        GiraffePlayer2.setShowTopBar(true);
        // @ts-ignore
        GiraffePlayer2.setFullScreenOnly(false);
        // @ts-ignore
        GiraffePlayer2.onClose(onCloseCB);
        _handleClickPlay();
    }, []);

    const _handleClickPlay = () => {
        // @ts-ignore
        GiraffePlayer2.setTitle(title);
        GiraffePlayer2.play(url);

    };

    return <View/>;
});
