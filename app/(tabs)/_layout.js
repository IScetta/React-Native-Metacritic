import { FontAwesome } from "@expo/vector-icons";
import { Link, Tabs } from "expo-router";
import { Pressable, View } from "react-native";

export default function TabsLayaut() {
  return (
    <Tabs screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "black"},
        tabBarActiveTintColor: "#FFBD3F",
        
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Link asChild href="/">
              <Pressable>
                <FontAwesome name="home" size={24} color={color} />
              </Pressable>
            </Link>
          ),
        }}
      />

<Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color }) => (
            <Link asChild href="/">
              <Pressable>
                <FontAwesome name="info" size={24} color={color} />
              </Pressable>
            </Link>
          ),
        }}
      />
    </Tabs>
  );
}
