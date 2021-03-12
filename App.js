
import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import  Routes from "./routes";
import { Provider } from "react-redux";
import store from './store'



export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor={"#D9232D"} />
          <Provider store={store}>
            <Routes />
          </Provider>
       </SafeAreaView>
    );
  }
}
