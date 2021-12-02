import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  welcomecontainer: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent:"space-evenly"
  },

  image: {
    width: "100%",
    height: "70%",
    marginTop: "50%",
  },

  welcome: {
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(161, 170, 173, 0.136)",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 30,
    backgroundColor: "#fff1",
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowOffset:{
      width:2,
      height:2,
    },
    shadowColor: "dodgerblue",
    elevation: 1,
    width: "100%",
    height: "65%",
    justifyContent: "space-evenly",
    alignItems:'center'
  },

  header: {
    fontSize: 30,
    fontWeight:"bold",
    paddingBottom: 5,
  },

  message: {
    fontSize: 18,
    justifyContent:"flex-start", 
  },

  signin: {
    height: 60,
    padding: 20,
    borderRadius: 50,
    margin: 50,
    backgroundColor: "#000",
    width: "70%",
  },

  signintext: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});

export default styles;
