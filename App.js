import { faBarChart, faGear, faHome, faTrophy, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import { View, TouchableOpacity } from 'react-native'

import Home from "./Tabs/Home"
import Leaderboard from "./Tabs/Leaderboard"
import Milestones from "./Tabs/Milestones"
import Profile from "./Tabs/Profile"
import Settings from "./Tabs/Settings"
const Tabs = createBottomTabNavigator()


function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row', backgroundColor: '#0b6e4f' }}>
      {state.routes.map((route, index) => {
        const selected = state.index == index
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 18, color: '#0b6e4f', }}
          >
            <FontAwesomeIcon icon={options.icon} size={24} color={selected ? "#02d6f2" : "white"} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator tabBar={(props) => <MyTabBar {...props} />}>
        <Tabs.Screen name="Profile" options={{headerShown: false, icon: faUser}} component={Profile} />
        <Tabs.Screen name="Leaderboard" options={{headerShown: false, icon: faTrophy}} component={Leaderboard} />
        <Tabs.Screen name="Home" options={{headerShown: false, icon: faHome}} component={Home} />
        <Tabs.Screen name="Milestones" options={{headerShown: false, icon: faBarChart}} component={Milestones} />
        <Tabs.Screen name="Settings" options={{headerShown: false, icon: faGear}} component={Settings} />
      </Tabs.Navigator>
      
    </NavigationContainer>
  )
}