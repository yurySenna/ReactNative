import { View, Text } from "react-native"

interface iFirstComponent {
    order: number;
}
export const FirstComponent = (props: iFirstComponent) => {

    return (
        <View>
            <Text>bom dia, {props.order}</Text>
        </View>
    )
}