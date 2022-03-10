import React, {useState} from 'react';
import {Text,TextInput,SafeAreaView, StyleSheet} from "react-native";

const [text, setText] = useState();

// search의 화면 자체를 꾸며줄거야
const Search = () => {
    return (
        <SafeAreaView>
            <TextInput
                style={styles}
                onChangeText={setText}
                value={text}
                placeholder="검색 창"
                keyboardType="string"
            >
            </TextInput>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
export default Search;