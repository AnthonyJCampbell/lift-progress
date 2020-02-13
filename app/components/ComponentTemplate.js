import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import DefaultText from './DefaultText'

const ComponentTemplate = props => {
    return (
        <View style={styles.component}>
            <DefaultText>Here's the text</DefaultText>

            {/* In case you want something to be clickable */}
            <TouchableOpacity
                onPress={() => console.log("I'm doing something")}
            >
                <View style={{ width: "100", height: "100", borderColor: "red", borderWidth: 3 }}>
                    <Text>
                        Here's some text inside of a view that console logs once it's touched
                    </Text>
                </View>
            </TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({
    component: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ComponentTemplate;

