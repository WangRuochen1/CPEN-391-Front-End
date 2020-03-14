import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from "react-native";
import user from "../assets/user.png";
import cat_icon from "../assets/cat_icon.png";
import cat1 from "../assets/cat1.jpeg";
import cat2 from "../assets/cat2.jpeg";
import cat3 from "../assets/cat3.jpeg";
import PhotoRow from "../src/util/photoRow";


export default class UserProfile extends React.Component{


    render(){

        return(
            <View>
                <View style = {styles.container}>
                    <Image
                        style={{width: 60, height: 60}}
                        source={user}
                    />
                    <Text style = {styles.name}>Name: Kurahara</Text>
                </View>

                <View style = {styles.container1}>
                    <Text style = {{fontSize : 18, paddingLeft: 0,color: "#F7AF32"}}>
                        Self Description:</Text>
                </View>

                <View style = {{flexDirection: "row",justifyContent: "flex-start",paddingLeft: 20,paddingTop: 10,}}>
                    <Text style = {{fontSize : 14, paddingLeft: 0,color: "#F0ABAB"}}>
                    I am a cat owner</Text>
                </View>
                <View style={{borderBottomColor: "#A97431", borderBottomWidth: 4,paddingTop: 20}}/>
                <View>
                    <PhotoRow
                    source1 = {cat1}
                    goto={this.props.navigation}
                    source2 = {cat2}
                    source3 = {cat3}/>
                            
                </View>    
            </View>
        )}
}


const styles = StyleSheet.create({
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