import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fbfc",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 24,
  },
  headerLeft: {
    flexDirection: "row",
  },
  salutation: {
    fontSize: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    marginLeft: 8,
    justifyContent: "space-between",
  },
  serviceContainer: {
    marginHorizontal: 16,
  },
  serviceTitle: {
    fontWeight: "bold",
    marginBottom: 16,
  },
  services: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  serviceItem: {
    width: 80,
    height: 80,
  },
  serviceIcon: {
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  serviceName: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#888",
  },
});
