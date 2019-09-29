
import { Dimensions, Platform } from 'react-native';



const SIZES = Object.freeze({
    // 'SCREEN_WIDTH': Math.round(Dimensions.get('width').width),
    // 'SCREEN_HEIGHT': Math.round(Dimensions.get('width').height),
    'PRIMARY_FONT_SIZE': 10 
})

const COLORS = Object.freeze({
    'PRIMARY_COLOR': 'white',
    'SECONDARY_COLOR': '#032b4f',
    'PRIMARY_TEXT_COLOR': 'white',
    'SECONDARY_TEXT_COLOR': 'black',
})

const KEYS = Object.freeze({
    '_series': 'series',
    '_movies': 'movies'

})

const SCREENS = Object.freeze({
    'HOME_SCREEN': 'HomeScreen',
})


export {
    SIZES,
    KEYS,
    SCREENS,
    COLORS,
}