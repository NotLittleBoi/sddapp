import React from "react";
import { View } from "react-native";
import Ring from "./Ring";

export default class RingDisplay extends React.Component {
    state = {
        tokenDisplay: 0,
        tokens: 0,
        fontSize: 24
    }

    componentDidMount() {
        this.state.tokens = this.props.tokens
        setInterval(() => {
            this.state.tokenDisplay += (this.state.tokens-this.state.tokenDisplay)*0.3
            this.setState({
                fontSize: 24 - Math.round(this.state.tokenDisplay).toString().length * 1.35
            })
        }, 1000 / 30)
    }

    componentDidUpdate() {
        this.state.tokens = this.props.tokens
    }

    render() {
        return (
            <View style={{width: 120, height: 120,}}>
                <Ring ringColor={`hsl(${360 * (this.state.tokenDisplay / 1000)}, 100%, 50%)`} innerColor={"#c7cb85"} content={`${Math.round(this.state.tokenDisplay)} TK`} style={{fontSize: this.state.fontSize}}></Ring>
            </View>
        )
    }
}