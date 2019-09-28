import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
} from "react-navigation";


 


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
    }
  }
);

const App = createAppContainer(AppNavigator);
export default App;
