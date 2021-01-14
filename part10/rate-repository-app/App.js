import React from 'react';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/react-hooks';

import Main from './src/components/Main';
import createApolloClient from './src/utils/apolloClient';
import AuthStorage from './src/store/AuthStore';
import AuthStorageContext from './src/contexts/AuthStorageContext';

import { Provider } from 'mobx-react';

import RootStore from './src/store/RootStore';

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

const App = () => {

  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <AuthStorageContext.Provider value={authStorage}>
          <Provider {...RootStore}>
            <Main />
          </Provider>
        </AuthStorageContext.Provider>
      </ApolloProvider>
    </NativeRouter>
    );
};

export default App;