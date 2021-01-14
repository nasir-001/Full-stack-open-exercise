import { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Alert } from 'react-native';
import { useApolloClient } from '@apollo/client';
import {AUTHORIZED_USER} from '../graphql/queries';
import AuthStorageContext from '../contexts/AuthStorageContext';

function useAuthorized(includeReviews = false) {
  const { data, loading, ...result } = useQuery(AUTHORIZED_USER, {
    fetchPolicy: 'cache-and-network',
    variables: { includeReviews, first: 5 }
  });
  const authStorage = useContext(AuthStorageContext);

  const apolloClient = useApolloClient();

  const signOut = async () => {
    Alert.alert("press from signout");
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return {
    isAuthorized: Boolean(data && data.authorizedUser),
    data: data && data.authorizedUser,
    loading,
    signOut,
    ...result,
  };
}

export default useAuthorized;