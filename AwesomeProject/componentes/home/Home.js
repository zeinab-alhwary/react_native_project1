import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Style from "./Style";
const Tab=createBottomTabNavigator();
function Home(){
 return(<>
 <View style={Style.imageHom}> 
     <ImageBackground source={require('../../assets/watching.jpg')} style={Style.imageHom}/> 
    
</View>
<View style={Style.txt}>
    <Text style={Style.txtChild}>INFO</Text>
    <Text style={Style.txtChild}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices convallis sodales. Donec nec tortor eros. Nam sagittis eleifend volutpat. Curabitur viverra neque vitae massa eleifend, ac scelerisque massa tincidunt. Morbi ullamcorper vestibulum odio ac posuere. Nam augue tellus, aliquet sed lorem ut, porta pretium turpis. Nulla quis fermentum nulla. In hac habitasse platea dictumst. Cras egestas vitae dolor in tempus. Pellentesque pretium condimentum scelerisque. Nunc dictum mauris ligula, sed malesuada leo blandit id. Maecenas vel sollicitudin sem. 
        Duis eget risus volutpat, auctor sapien ut, 
        scelerisque tellus. Nunc at nibh ligula.</Text>
</View>
{/* <View style={Style.footer}>
<MaterialCommunityIcons name="facebook" color={"white"} size={40} style={Style.footericon}/> 
<MaterialCommunityIcons name="twitter" color={"white"} size={40} style={Style.footericon} />
<MaterialCommunityIcons name="instagram" color={"white"} size={40} style={Style.footericon}/>
</View>  */}
</>)
}
export default Home;
