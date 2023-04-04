import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default class Ring extends React.Component {
    render() {
        return (
            <View style={[{backgroundColor: this.props.ringColor}, styles.ringContainer]}>
                <View style={[{backgroundColor: this.props.innerColor}, styles.innerContainer]}>
                    <Text style={this.props.style}>{this.props.content}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    ringContainer: {
        flex: 1,
        borderRadius: '50',
        aspectRatio: 1,
        padding: 12,
    },
    innerContainer: {
        flex: 1,
        borderRadius: '50',
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
    }
})