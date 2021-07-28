import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';
import FontStyles from '../constants/fontstyles';

const Header = props => {
    return (
        <View style={styles.headerBar}>
            <Text style={[styles.headerText, FontStyles.title]}>
                {props.title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerBar: { 
        flexDirection: 'row',
        width: '100%',
        height: 90,
        paddingTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.headerBar,
        borderWidth: 1,
    },
    headerText: {
        fontSize: 18
    },
});

export default Header;