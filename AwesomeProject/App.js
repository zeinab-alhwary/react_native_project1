import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./componentes/home/Home";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
const Drawer = createDrawerNavigator();
import { Image } from "react-native";
import Style from "./componentes/home/Style";
import Movies from "./componentes/Liste/ListMovie";
import Details from "./componentes/MoviesDetails";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Login from "./componentes/auth/Login";
import Todo from "./componentes/ToDo/TodoList";
import Favorite from "./componentes/FavoriteMovies";
import { Provider ,useSelector } from "react-redux";
import store from "./store/Store";

const Tab = createBottomTabNavigator();

function TabNave() {
  const count=useSelector((start)=>start.count)
console.log(count)
  return (
     
    <Tab.Navigator>
      <Tab.Screen
        name="My Home"
        component={Home}
        options={{
          headerShown:false,
          tabBarLabel: "",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color={"red"} size={40} />
          ),
          
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarBadge:count,
          headerShown:false,
          tabBarLabel: "",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="cart" color={"red"} size={40} />
          ),
          
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          headerShown:false,
          tabBarLabel: "",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="login" color={"red"} size={40} />
          ),
        }}
      />
    </Tab.Navigator>
 
  );
}
export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={TabNave} />
        <Drawer.Screen name="todo" component={Todo} />
        <Drawer.Screen name="Movie" component={Movies} />
        <Drawer.Screen name="Favorite" component={Favorite} />
        <Drawer.Screen name="Details" component={Details} />
      </Drawer.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
