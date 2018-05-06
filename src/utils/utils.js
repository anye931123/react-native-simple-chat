
import {Dimensions} from 'react-native'
export const getImageSource=(data)=>{

    let source = null
    if (typeof data === 'string') {
        source = {uri: data}
    } else if (typeof data === 'number') {
        source = data
    }

    return source
}

export const windowWidth=Dimensions.get('window').width