import {View, Text} from 'react-native';
import React from 'react';
import MainStackNavigator from './src/navigations/MainStackNavigator';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
export default function App() {
  let presistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate persistor={presistor}>
        <MainStackNavigator />
      </PersistGate>
    </Provider>
  );
}
