import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const LoginScreen = ({ navigation }: any) => {
  const [showPassword, setShowPassword] = React.useState(false);
  //   const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.LogoBox}>
        <Text>Login</Text>
      </View>
      <View style={styles.formBox}>
        {/* email */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Email Address</Text>
          <View style={styles.inputBox}>
            <Feather name="mail" style={styles.icon} />
            <TextInput style={styles.input} placeholder="username@gmail.com" />
          </View>
        </View>
        {/* password */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputBox}>
            <Feather name="lock" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="********"
              secureTextEntry={showPassword}
            />
            <Feather
              onPress={() => setShowPassword(!showPassword)}
              name={showPassword ? "eye-off" : "eye"}
              style={styles.icon}
            />
          </View>
        </View>
        {/* button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Dashboard")}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        {/* other links */}
        <View style={styles.otherFormLinks}>
          <TouchableOpacity>
            <Text style={styles.link}>Signup</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.link}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: "#5B628F",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginBottom: 24,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  container: {
    height: "100%",
    backgroundColor: "#E9F0FB",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  LogoBox: {
    flex: 2,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  formBox: {
    width: "100%",
    flex: 3,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  inputWrapper: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 16,
    marginBottom: 24,
    elevation: 16,
    shadowColor: "#B4C4E5",
    shadowOffset: { width: 3, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
  },
  label: {
    fontSize: 14,
    color: "#949494",
    paddingBottom: 8,
  },
  input: {
    color: "#494949",
    flex: 1,
  },
  icon: {
    fontSize: 16,
    color: "#494949",
    marginRight: 8,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  otherFormLinks: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  link: {
    color: "#494949",
    fontSize: 12,
    fontWeight: "500",
  },
});
