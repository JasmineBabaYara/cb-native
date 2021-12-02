import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
  welcomecontainer: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  image:{
    width: "100%",
    height:"100%",
  },

  welcome: {
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(161, 170, 173, 0.136)",
    borderRadius: 30,
    paddingTop: 40,
    paddingLeft:10,
    paddingBottom:20,
    paddingRight:20,
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    shadowOpacity: 10,
    shadowRadius: 10,
    shadowOffset:{
      width:0,
      height: 2,
    },
    shadowColor: "rgba(31, 38, 135, 0.37)",
    elevation:3,
  },

  header: {
    fontSize: 30,
    paddingBottom: 0,
  },

  message: {
    fontSize: 16,
    marginBottom: 0,
  },

  signin: {
    height: 60,
    padding: 20,
    outline: "none",
    borderRadius: 28,
    border: "none",
    fontSize: 16,
    fontWeight: "bold",
    margin: 30,
    backgroundColor: "#000",
    color: "#fff",
    textAlign: "center",
  },
});

export default styles;