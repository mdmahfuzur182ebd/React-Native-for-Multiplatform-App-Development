import react from "react";
import { View ,Text, StyleSheet } from "react-native-web";

const ListItem = props => {
    return(
        <view style={styles.ListItem}>
            <Text>
                {props.placeName}
            </Text>
        </view>
    )
    
}

const styles = StyleSheet.create({
    ListItem:{
        width:"100%",
        padding:10,
        backgroundColor: "#eee",
        margin:5,
    }
})

export default ListItem;