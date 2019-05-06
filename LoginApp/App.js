/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  Dimensions
} from "react-native";

import bgImage from "./images/background.png";
import loginLogo from "./images/user-login.jpg";
import Icon from "react-native-vector-icons/Ionicons";

const { width: WIDTH } = Dimensions.get("window");

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Image source={loginLogo} style={styles.loginLogo} />
          <Text style={styles.logoText}> My Society</Text>
        </View>
        <View>
          <Icon
            name={"ios-person-outline"}
            size={28}
            color={"rgba(255,255,255,0.7)"}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder={"Username"}
            placeholderTextColor={"rgba(255,255,255,0.7"}
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={styles.input}
            placeholder={"Password"}
            placeholderTextColor={"rgba(255,255,255,0.7"}
            underlineColorAndroid="transparent"
          />
          <button 
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  logoContainer: {
    alignItems: "center"
  },
  loginLogo: {
    width: 120,
    height: 120
  },
  logoText: {
    color: "blue",
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    opacity: 10
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "rgba(0,0,0,0.35)",
    color: "rgba(255,255,255,0.7)",
    marginHorizontal: 25
  },
  inputIcon: {
    position: "absolute",
    top: 8,
    left: 37
  }
});
