import { Link, Stack, useLocalSearchParams } from "expo-router";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import Screen from "../components/Screen";
import { lazy, useEffect, useState } from "react";
import { getGameDetails } from "../lib/metacritic";
import { Image } from "react-native";
import Score from "../components/Score.jsx"

export default function Detail() {
  const { id } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if (id) {
      getGameDetails(id).then((data)=>setGameInfo(data));
    }
  }, [id]);

    
  return (
    <Screen className="flex-1 justify-center items-center">
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTintColor: "black",
          headerLeft: () => {},
          headerTitle: "The Leyend of Zelda",
          headerRight: () => {},
        }}
      />

      {gameInfo === null ? (
        <ActivityIndicator color={"#ffee00"} size={"large"} className="flex-1 justify-center items-center"/>
      ) : (
        <ScrollView>
            <View className="justify-center items-center ">
                <Image className=" mb-4 rounded" source={{uri : gameInfo.img}} style={{width: 214, height: 294}}/>
                <Score score={gameInfo.score} maxScore={100}/>
                <Text className="text-white font-bold mb-8 text-center text-2xl">{gameInfo.title}</Text>
                <Text className="text-white/70 mb-4  text-left text-base">{gameInfo.description}</Text>

            </View>

        </ScrollView>
      )}
    </Screen>
  );
}
