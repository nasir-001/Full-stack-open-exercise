import { useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useApolloClient } from '@apollo/client';
import { AUTHORIZE_USER } from '../graphql/mutations';

import AuthStorageContext from '../contexts/AuthStorageContext';

const  useSignIn = () => {
  const authStorage = useContext(AuthStorageContext);
  const [mutate, result] = useMutation(AUTHORIZE_USER);
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    const result = await mutate({ variables: { input: { username, password }}});
    await authStorage.setAccessToken(result.data.authorize.accessToken);
    apolloClient.resetStore();

    return result;
  };

  return [signIn, result];
};

export default useSignIn;