import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const OverviewCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconBox}>
        <Feather name="arrow-up" style={styles.icon} />
      </View>
      <View style={{ paddingLeft: 12, flex: 1 }}>
        <Text style={styles.h3}>Sent</Text>
        <View style={styles.detail}>
          <Text
            style={{
              flex: 6,
              fontSize: 13,
              color: "#494949aa",
            }}>
            Sending payment to client
          </Text>
          <Text
            style={[
              styles.h3,
              {
                fontSize: 14,
                flex: 2,
                textAlign: "right",
              },
            ]}>
            $150
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OverviewCard;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    elevation: 16,
    shadowColor: "#B4C4E5",
    shadowOffset: { width: 3, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    marginBottom: 16,
    marginHorizontal: 24,
  },
  iconBox: {
    backgroundColor: "#E9F0FB",
    borderRadius: 12,
    height: 45,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 20,
    fontWeight: "bold",
  },
  h3: {
    fontWeight: "bold",
    color: "black",
    fontSize: 16,
  },
  detail: {
    flexDirection: "row",
    width: "100%",
    flex: 1,
    paddingTop: 4,
  },
});
