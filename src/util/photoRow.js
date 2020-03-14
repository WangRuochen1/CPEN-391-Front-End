import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from "react-native";
import { Component } from "react";
import { ForceTouchGestureHandler } from "react-native-gesture-handler";
import CatProfile from "../../Screens/CatProfile";
import { NavigationContainer,useNavigation } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

export default class PhotoRow extends Component {


    _onPress(na) {
        na.navigate("CatProfile");
    }
    
    render = () => {
        return(
            <View style = {styles.container}>
            <TouchableOpacity onPress = {() => this.props.goto.navigate("CatProfile")} style = {styles.button}>
                <Image style={styles.photo} source={this.props.source1}/>
            </TouchableOpacity> 

            <TouchableOpacity onPress = {()=>this.props.goto.navigate("CatProfile")} style = {styles.button}>
                <Image style={styles.photo} source={this.props.source2}/>
            </TouchableOpacity>   

            <TouchableOpacity onPress = {()=>this.props.goto.navigate("CatProfile")} style = {styles.button}>
                <Image style={styles.photo} source={this.props.source3}/>
            </TouchableOpacity>      
            
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingTop: 10,
    },
    photo: {
        width: 120,
        height: 100,
      },
    button:{
        flexDirection: "row",
        justifyContent: "center",
        flex :1,
    },
});


