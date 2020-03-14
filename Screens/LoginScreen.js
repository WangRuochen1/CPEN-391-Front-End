import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from "react-native";
import cat_icon from "../assets/cat_icon.png";
//JavaScript function goes here
export default class LoginScreen extends React.Component {

    componentDidMount(){

    }

    state = {
      username : " ",
      password : " ",
    }

    handelUserName = (text) => {
      this.setState({ username: text });
    }

    handlePassword = (text) => {
      this.setState({ password: text });
    }


    log_in(username, password) {
      console.log(username);
      console.log(this.state.password);
    }


    render() {
        return (
            <View style = {{flexDirection: "column"}}> 
                <View style = {styles.container}>
                <Text style = {styles.textSytle}>Please Log In</Text>
                </View>
                  
                <View style = {{flexDirection: "row",justifyContent: "center", marginTop: 40}}>
                    <Image
                    style={{width: 60, height: 60}}
                    source={cat_icon}
                    />
                </View>

                <View>
                    <Text style = {styles.text1}>User Name:</Text>
                    <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "  "
                    placeholderTextColor = "#F7AF32"
                    autoCapitalize = "none"
                    onChangeText = {this.handelUserName}/>
                </View>

                <View>
                    <Text style = {styles.text1}>Password:</Text>
                    <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholderTextColor = "#F7AF32"
                    autoCapitalize = "none"
                    onChangeText = {this.handlePassword}
                    secureTextEntry = {true}/>
                </View>

                <TouchableOpacity
                    style = {styles.submitButton}
                    onPress = {
                      () => this.log_in(this.state.username, this.state.password)
                    }>
                    <Text style = {styles.submitButtonText}> Log In </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style = {styles.submitButton}
                    onPress = {
                      () => this.props.navigation.navigate("SignUp")
                    }>
                    <Text style = {styles.submitButtonText}> Sign Up </Text>
                </TouchableOpacity>  

            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "center",
      paddingTop: 60,
    },
    textSytle: {
        fontSize: 24,
        textShadowColor: "#F7AF32",
        textShadowRadius: 0,
        color: "#F7AF32",
    },
    text_container:{
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    text1:{
        paddingTop: 30,
        fontSize: 20,
        paddingLeft: 20,
        textShadowColor: "#F7AF32",
        textShadowRadius: 0,
        color: "#F3805E",
    },
    input: {
      marginTop: 10,
      marginHorizontal: 20,
      height: 40,
      borderColor: '#F7AF32',
      borderWidth: 1
    },
    submitButton: {
      backgroundColor: '#F7AF32',
      padding: 10,
      marginTop: 35,
      marginHorizontal: 20,
      height: 40,
      borderRadius: 20
    },
    submitButtonText: {
      color: 'white',
      textAlign: 'center'
    },
    icon: {
      width: 100,
      height: 100,
      left: 140,
      marginBottom: 50
    },
    option: {
      color: 'grey',
      textAlign: 'center'
    },
    fbicon: {
      width: 49,
      height: 50
    },
    fbButtom: {
      marginTop: 10,
      marginLeft: 160,
      width: 90,
      height: 70
    }
  });
