import {
  createAppContainer,
} from "react-navigation";
import HomeScreen from "./components/screens/HomeScreen";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
 


const AppNavigator = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen
    },
  
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    },
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#ffffff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const App = createAppContainer(AppNavigator);
export default App;
