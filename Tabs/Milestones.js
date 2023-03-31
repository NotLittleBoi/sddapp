import { StyleSheet, Text, View, } from "react-native";

export default function Milestones() {
    return (
        <View style = {styles.container}>
            <Text style = {styles.Warning}>
                WORK IN PROGRESS
                </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#c7cb85',
      padding: 12,
      alignItems: "center",
      justifyContent: 'center',
    
    },
    Warning: {
        fontSize: 50,
        fontWeight: "bold",
        color: 'white',  
        paddingHorizontal: 60,
    }
});