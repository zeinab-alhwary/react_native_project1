import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import { Card } from "@rneui/themed";
import { useDispatch, useSelector } from "react-redux";
import { MovieID } from "../../store/action";

function Movies({ navigation }) {
  const count = useSelector((state) => state.count);

  const myID = useSelector((state) => state.ID);
  const dispatch = useDispatch();
  const [Movies, setMovies] = useState([]);
  const DataFav = (movieData) => {
    dispatch(MovieID(movieData));

     alert(`you added ${count+1} movie`)
    const val = [];
    const values = myID.map((i) => i.id);
    for (let i = 0; i < values.length; i++) {
      val.push(values[i]);
    }
  };
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0&language=en-US&page=1"
      )
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <View >
        {Movies.map((movie) => {
          return (
            <View
              key={movie.id}
              style={{ alignItems: "center", backgroundColor: "black" }}
            >
              <Card.Divider />
              <View
                style={{
               
                  position: "relative",
                  alignItems: "center",
                  width: 420,
                }}
              >
                <Image
                  style={{ width: "100%", height: 500 }}
                  resizeMode="contain"
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}?api_key={singleMovie.key}`,
                  }}
                />
                <Text
                  onPress={() => DataFav(movie)}
                  style={{ color: "red",  cursor: "pointer" ,flexDirection:'row' }}
                >
                  Add FAVORITE
                </Text>
                <Card.Title
                  onPress={() =>
                    navigation.navigate("Details", { id: movie.id })
                  }
                  style={{ color: "white" }}
                >
                  {movie.title}
                </Card.Title>
              </View>
              <Card.Divider />
            </View>
          );
        })}
      </View>
    </>
  );
}
export default Movies;
