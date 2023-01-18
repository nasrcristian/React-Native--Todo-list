import {View, Text, StyleSheet} from "react-native"

export default function Heading(){
    return(
        <View style={styles.headingContainer}>
            <Text  style={styles.heading}> Lista de Compras </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headingContainer:{
        marginTop: 50,
        padding: 3,
        borderRadius: 20,
        backgroundColor: "rgb(200, 190, 200)",
        shadowColor: "rgb(100, 30, 120)",
        shadowOffset: {width: 0.1, height: 0.4},
        shadowOpacity: 0.8,
        shadowRadius: 8
    },
    heading:{
        fontSize: 50,
        color: "rgb(100, 50, 100)"
    },
})