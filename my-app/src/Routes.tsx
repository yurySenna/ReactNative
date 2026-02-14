import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePage } from "./screens/Home";
import { DetailPage } from "./screens/Detail";
import { SetUserNamePage } from "./screens/SetUseName";
import { NavigationContainer } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


type TScreenDefinitions = {
    home: undefined;
    setUserName: undefined;
    detail: { rate: number};
}

const Stack = createNativeStackNavigator<TScreenDefinitions>();

export const AppRoutes = () => {


    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={HomePage} />
                <Stack.Screen name="detail" component={DetailPage} />
                <Stack.Screen name="setUserName" component={SetUserNamePage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export type TNavigationScreenProps = NativeStackNavigationProp<TScreenDefinitions>;