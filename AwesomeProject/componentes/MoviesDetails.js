import { Card } from "@rneui/themed";
 
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { Text, View } from "react-native";

function Details({ navigation, route }) {
 const ID=route.params.id;
  //505642
  const [details, setdetails] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${ID}?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0`
      )
      .then((res) => setdetails(res.data))
      .catch((err) => console.log(err));
  }, [ID]);
  return (
  <>
  
      <View style={{ alignItems: "center", backgroundColor: "black" }}>
        <Card.Divider />
        <View
          style={{
            position: "relative",
            alignItems: "center",
    
            width: 400,
          }}
        >
          <Image
            style={{ width: "100%", height: 500 }}
            resizeMode="contain"
            source={{
              uri: `https://image.tmdb.org/t/p/w500${details.poster_path}?api_key={singleMovie.key}`,
            }}
          />
          <h1 style={{color:"red"}} >{details.title}</h1>
          <p  style={{color:"white"}}>{details.overview}</p>
        </View>
        <Card.Divider />
     </View>
    </>
  );
}
export default Details;
