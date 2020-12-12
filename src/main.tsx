import React, {useCallback, useState} from 'react';
import {Platform} from "react-native";
import {VideoIos} from "@/VideoIos";
import {VideoAndroid} from "@/VideoAndroid";

interface Props {
    url: string,
    title: string,
    onClose: () => void
}

const App = ({url, title, onClose}: Props) => {
    const onCloseCB = useCallback(() => {
        if (onClose) {
            onClose()
        }
    }, [onClose]);


    return (
        Platform.OS === 'ios' ? <VideoIos url={url} title={title} onClose={onClose}/> :
            <VideoAndroid title={title} url={url} onClose={onCloseCB}/>
    )
};

export default App;
