import {
    StyleSheet,
    Dimensions
} from 'react-native';
import Colors from '../utils/Colors'
export const styles=StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        height:200,
        width:Dimensions.get('window').width,
        backgroundColor:Colors.white
    }
})