import { useEffect, useState } from "react";
import {
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getLatestGames } from "../lib/metacritic";
import GameCard, { AnimatedGameCard } from "./GameCard";



export default function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <View className="bg-black">
    
      {games.length === 0 ? (
        <View className=" flex-1 justify-center items-center bg-black">
          <ActivityIndicator size={75} color={"#ffee00"}/>
        </View>
      )
      :
      <FlatList 
      data={games}
      keyExtractor={(game)=>game.slug}
      renderItem={({item, index})=><AnimatedGameCard game={item} index={index}/>}
      />
      }
      

    </View>
  );
}


