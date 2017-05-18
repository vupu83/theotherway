/**
 * Created by Johnny on 5/18/17.
 */
import React from 'react';
import {Text, View} from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text>登入成功, 開始選課</Text>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
}

export default Header;