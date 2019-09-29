import {
  createAppContainer,
} from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./components/screens/HomeScreen.js";
import SellScreenDrawer from "./components/drawers/SellScreenDrawer.js";
import SellScreen from "./components/screens/SellScreen.js";


const SellScreenNavigator = createDrawerNavigator({
  SellScreen: { 
     screen: SellScreen
   },
}, {
  contentComponent: SellScreenDrawer,
  drawerWidth: 300,
}
);

const AppNavigator = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen
    },
    SellScreen: {
      screen: SellScreenNavigator
    }
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
