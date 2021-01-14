import React from 'react';
import { View, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
    const renderItem = ({item}) => <RepositoryItem item={item} />;

    const repositoriesNode = repositories
        ? repositories.edges.map(edge => edge.node)
        : [];

    return (
      <>  
        <SafeAreaView>
          <FlatList
          data={repositoriesNode}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </>
    );
}

const RepositoryList = () => {
    const { repositories } = useRepositories();

    return <RepositoryListContainer repositories={repositories} />
};

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
});

export default RepositoryList;