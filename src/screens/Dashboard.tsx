import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Platform,
  StatusBar,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import OverviewCard from "../components/OverviewCard";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./Login";

const Tab = createBottomTabNavigator();

const imgUrl =
  "https://images.unsplash.com/photo-1646541121625-e6675f5e88b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80";

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#EDEAEC",
          position: "absolute",
          bottom: 16,
          right: 24,
          left: 24,
          height: 60,
          borderRadius: 16,
          elevation: 16,
          shadowColor: "#B4C4E5",
          shadowOffset: { width: 3, height: 10 },
          shadowOpacity: 0.2,
          shadowRadius: 16,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen name="Settings" component={LoginScreen} />
    </Tab.Navigator>
  );
}

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.box, styles.cardWrap]}>
        <View style={styles.card}>
          {/* menu icons */}
          <View style={styles.flexWrap}>
            <TouchableOpacity>
              <Feather name="menu" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="more-vertical" style={styles.icon} />
            </TouchableOpacity>
          </View>
          {/* profile image */}
          <View style={styles.imageWrap}>
            <Image source={{ uri: imgUrl }} style={styles.image} />
          </View>
          {/* profile name */}
          <View style={styles.imageWrap}>
            <Text style={styles.h1}>Hira Riaz</Text>
            <Text style={styles.h5}>UI/UX Designer</Text>
          </View>
          {/* rates */}
          <View style={styles.rateWrapper}>
            <View style={styles.rateBox}>
              <Text style={styles.h3}>$8900</Text>
              <Text style={styles.h6}>income</Text>
            </View>
            <View style={[styles.rateBox, styles.rateCenterBox]}>
              <Text style={styles.h3}>$5500</Text>
              <Text style={styles.h6}>Expenses</Text>
            </View>
            <View style={styles.rateBox}>
              <Text style={styles.h3}>$890</Text>
              <Text style={styles.h6}>Loan</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.box, styles.overview]}>
        <View style={styles.flexWrap}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.caption}>Overview</Text>
            <Feather
              name="bell"
              style={{
                fontSize: 18,
                marginLeft: 8,
                marginTop: 5,
              }}
            />
          </View>
          <Text style={[styles.h5, { fontWeight: "bold" }]}>Sept 13 2022</Text>
        </View>
        <FlatList
          data={[0, 1, 2, 3, 4, 5]}
          renderItem={() => <OverviewCard />}
          keyExtractor={(item, index) => `${item + index}`}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyTabs;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#E9F0FB",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  box: {
    flex: 6,
    width: "100%",
    paddingVertical: 8,
  },
  card: {
    backgroundColor: "#FFFFFF",
    height: "100%",
    width: "100%",
    padding: 16,
    borderRadius: 16,
    elevation: 16,
    shadowColor: "#B4C4E5",
    shadowOffset: { width: 3, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
  },
  caption: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#5B628F",
  },
  cardWrap: {
    flex: 5,
    padding: 24,
  },
  icon: {},
  image: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
  imageWrap: {
    alignItems: "center",
    width: "100%",
    paddingTop: 12,
  },
  flexWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 24,
    paddingBottom: 24,
  },

  h1: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#5B628F",
  },
  h3: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#5B628F",
  },
  h5: {
    paddingTop: 6,
    fontSize: 12,
    fontWeight: "normal",
    color: "#494949cc",
  },
  h6: {
    paddingTop: 6,
    fontSize: 10,
    fontWeight: "bold",
    color: "#494949bb",
  },
  nav: {
    flex: 1,
    width: "100%",
  },
  rateBox: {
    width: 80,
    alignItems: "center",
  },
  rateCenterBox: {
    borderEndColor: "#B4C4E5AE",
    borderEndWidth: 1,
    borderStartColor: "#B4C4E5AE",
    borderStartWidth: 1,
  },
  rateWrapper: {
    paddingTop: 34,
    flexDirection: "row",
    alignSelf: "center",
  },
  overview: {},
});
