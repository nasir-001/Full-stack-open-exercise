import ApolloClient from 'apollo-boost';
import Constants from 'expo-constants';

const createApolloClient = (authStorage) => {
    return new ApolloClient({
        request: async (operation) => {
            try {
                const accessToken = await authStorage.getAccessToken;
                operation.setContext({
                    headers: {
                        Authorization: accessToken ? `Bearer ${accessToken}` : '',
                    },
                });
            } catch (error) {
                console.log(error);
            }
        },
        uri: Constants.manifest.extra.apollo_uri,
    });
};

export default createApolloClient;