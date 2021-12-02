import React, { useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Animated,
} from "react-native";

// Welcome Screen Styles
import styles from "../styles/welcomeScreen.style";
import "../assets/img/bg.png";

export default function WelcomeScreen({ setIsLoggedIn }) {
  const animated = new Animated.Value(800);
  const duration = 3000;

  useEffect(() => {
    Animated.timing(animated, {
      toValue: 50,
      duration: duration,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.welcomecontainer}>
      <ImageBackground
        source={require("../assets/img/bg.png")}
        style={styles.image}
      />

      <Animated.View style={[{ transform: [{ translateY: animated }] }]}>
        <View style={styles.welcome}>
          <View>
            <Text style={styles.header}>Welcome</Text>
            <Text style={styles.message}>
              Find the appropriate job for your skills{"\n"}
              Leverage your skills and knowledge in the job market{"\n"}
              Join us for the experience of a career lifetime
            </Text>
          </View>
          <TouchableOpacity style={styles.signin}>
            <Text style={styles.signintext} onPress={() => setIsLoggedIn(true)}>
              Sign In With Google
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
}
