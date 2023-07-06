import { View, Text, StyleSheet } from "react-native";
// import LogoutButton from "../../components/LogoutButton";

const PostsScreen = () => {
  const handleLogoutButton = () => {
    console.log("Logout");
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Публікації</Text>
        {/* <LogoutButton onPress={handleLogoutButton}></LogoutButton> */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff",
  },
  headingContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "100%",
    height: 90,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 12,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  heading: {
    fontFamily: "Roboto-Medium",
    fontSize: 17,
    marginLeft:'auto',
    marginRight:'auto',
  },
});

export default PostsScreen;
