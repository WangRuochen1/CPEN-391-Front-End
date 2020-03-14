import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from "react-native";
import user from "../assets/user.png";
import cat_icon from "../assets/cat_icon.png";
import cat1 from "../assets/cat1.jpeg";
import cat2 from "../assets/cat2.jpeg";
import cat3 from "../assets/cat3.jpeg";
import back from "../assets/back.png";


export default class CatProfile extends React.Component{


    render() {
        return(
            <View>
                <View style = {styles.top_bar}>
                    <TouchableOpacity style  = {styles.back_button} 
                    onPress = {() => this.props.navigation.goBack()}>
                        <Image style  = {styles.back_button} source = {back}/>
                    </TouchableOpacity>
                </View>    
                <View style  = {styles.container}>
                <Text>cat profile</Text>
                </View> 
            </View>                   
        
        )}
}   

const styles = StyleSheet.create({
    top_bar:{
        marginTop:60,
        flexDirection:"row",
        justifyContent:"flex-start",
    },
    back_button: {
        height:25,
        width :25,
        paddingLeft: 20,
    },
    container: {
      flexDirection: "row",
      justifyContent: "flex-start",
      paddingLeft: 20,
      paddingTop: 80,
    },
    container1: {
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingLeft: 20,
        paddingTop: 20,
      },
    name:{
        fontSize: 24,
        textShadowColor: "#F7AF32",
        textShadowRadius: 0,
        paddingLeft: 20,
        color: "#F7AF32",
    }
});
