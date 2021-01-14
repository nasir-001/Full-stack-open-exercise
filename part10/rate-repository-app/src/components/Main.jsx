import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import Repository from './Repository';
import SingIn from './SignIn';
import AppBar from './AppBar';
import { t } from 'react-native-tailwindcss';
import { Route, Switch, Redirect } from 'react-router-native';

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flexGrow: 1,
        flexShrink: 1,  
    },
});

const Main = () => {
    return (
        <View style={[styles.container, t.bgGray200]}>
            <AppBar />
            <Switch>
                <Route path="/" exact>
                    <RepositoryList />
                </Route>
                <Route path="/signin" exact>
                    <SingIn />
                </Route>
                <Route path="repositories/:id" exact>
                    <Repository />
                </Route>
                <Redirect to="/" />
            </Switch>
        </View>
    );
};

export default Main;
