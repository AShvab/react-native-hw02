import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
// import LoginScreen from './Screens/LoginScreen/LoginScreen';
// import RegistrationScreen from './Screens/RegistrationScreen/RegistrationScreen';
import PostsScreen from './Screens/PostsScreen/PostsScreen';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Medium': require('./assets/fonts/Roboto/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>    
        <Image
          source={require("./images/backgroundImg.jpg")}
          resizeMode="cover"
          style={styles.image}
        />

            {/* <RegistrationScreen /> */}
            {/* <LoginScreen /> */}
            <PostsScreen />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    position: "absolute",
    width: "100%",
    flex: 1,
    justifyContent: "center",
},
});
