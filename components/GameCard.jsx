import { useEffect, useRef } from 'react';
import { Text, View, StyleSheet, Image, Animated, Pressable } from 'react-native'
import Score from './Score';
import { Link } from 'expo-router';
import { styled } from 'nativewind';

const StylePressable = styled(Pressable)

export function GameCard({game}){
    return (

      <Link asChild href={`/${game.slug}`}> 
      <StylePressable className='p-4 rounded-xl active:opacity-70 border border-black active:border-white/50 mb-2 bg-gray-500/10'>
      <View className="flex-row gap-4 mb-10">
        <Image
          source={{ uri: game.image }}
          style={styles.image}
        />
        <View className=" flex-shrink">
        <Text className="mb-1" style={styles.title}>{game.title}</Text>
        <Score score={game.score} maxScore={100}/>
        <Text className="mt-2 flex-shrink-0" style={styles.description}>{game.description.slice(0,100)} ...</Text>
        </View>
      </View>
      </StylePressable>
      </Link>
    )
}

export function AnimatedGameCard({game,index}){
    const opacity = useRef(new Animated.Value(0)).current
    useEffect(()=>{
        Animated.timing(opacity,{
            toValue: 1,
            duration: 500,
            delay: index*250,
            useNativeDriver: true,
        }).start();
    },[opacity,index])
    return(
        <Animated.View style={{opacity}}>
            <GameCard game={game}/>
        </Animated.View>
    )
}


const styles = StyleSheet.create({
    card:{
      marginBottom: 52
  
    },
    image:{
      width: 107,
      height: 147, 
      borderRadius: 10 
    },
    title:{
      fontSize: 20,
      fontWeight: "bold",
      color: "white",
      marginTop: 10
  
    },
    description:{
      fontSize: 16,
      color:"#eee",
      marginTop:10
    },
    score:{
      fontSize: 20,
      fontWeight: "bolt",
      color: "green",
      marginTop: 10
    }
  
  });