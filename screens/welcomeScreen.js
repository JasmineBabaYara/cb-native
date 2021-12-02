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

export default function WelcomeScreen({ setIsLoggedIn }) {
  const animated = new Animated.Value(255);
  const duration = 5000;

  useEffect(() => {

  })


  return (
    <View style={styles.welcomecontainer}>
      <View>
        <ImageBackground
          source={require("../assets/img/bg.png")}
          style={styles.image}
        />
      </View>
      <Animated.View style={styles.welcome}>
        <View>
          <Text style={styles.header}>Welcome</Text>
          <Text style={styles.message}>
            Find the appropriate job for your skills{"\n"}
            Leverage your skills and knowledge in the job market{"\n"}
            Join us for the experience of a career lifetime
          </Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.signin} onPress={() => setIsLoggedIn(true)}>
            Sign In With Google
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
