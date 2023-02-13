import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Button, Image, TouchableHighlight, View,Text, ScrollView} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Card } from "@rneui/themed";
import { Remove } from "../store/action";

function Favorite() {
  const myID = useSelector((state) => state.ID);
 // console.log(myID)
  const dispatch = useDispatch();
  function removeDuplication(myID) {
    return myID.filter((item, index) => myID.indexOf(item) === index);
  }
  const newArr = removeDuplication(myID);
    
  
  const Delete = (ind) => {
    dispatch(Remove(ind));
  };
  return (
     
    <ScrollView>
       {newArr.map((movie,index) => {
          return (
            <View key={movie.id} style={{ width:"100%",height:'100vh', alignItems: "center",backgroundColor:'black'}}>
               
              <View  style={{ position: "relative", alignItems: "center" ,width:420}}>
                <Image
                  
                  style={{ width: "100%", height: 500}}
                  resizeMode="contain"
                  source={{
                    uri:`https://image.tmdb.org/t/p/w500${movie.poster_path}?api_key={singleMovie.key}`,
                  }}
                />
                 <Card.Title style={{color:'white'}}>{movie.title}</Card.Title>
              </View>
              
               <Button onPress={()=>Delete(index)} title="Delete" color={"red"}></Button>
            </View>
          );  
        })} 
        </ScrollView>
        
  );
}
export default Favorite;
