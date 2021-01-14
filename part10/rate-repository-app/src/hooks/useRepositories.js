import { NetworkStatus, useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {

    const {data, loading, error, networkStatus} = useQuery(
        GET_REPOSITORIES,
        {
            notifyOnNetworkStatusChange: true,
            fetchPolicy: "cache-and-network"
        }    
    );

    if (networkStatus === NetworkStatus.refetch) return 'Refetching!';
    if (loading) return "loading...";
    if (error) return `Error! ${error}`;

    return data;
    
};

export default useRepositories;