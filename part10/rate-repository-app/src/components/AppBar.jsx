import React, { useCallback } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { t } from 'react-native-tailwindcss';
import { Link, useHistory } from 'react-router-native';

import AppBarTab from './AppBarTab';
import useAuthorized from '../hooks/useAuthorize';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#24292e'
    },
    scrollView: {
        marginHorizontal: 20,
    },
});


const AppBar = () => {
    const { isAuthorized, signOut } = useAuthorized();

    const routeTabPress = useCallback((path) => {
        history.push(path);
      }, []);

    return (
        <View style={[styles.container]}>
            <ScrollView horizontal style={styles.scrollView}>
                <TouchableOpacity>
                    <Link to="/">
                        <Text style={[t.pB5, t.pR3, t.text4xl, t.textBlue500, t.trackingWide]}>Repositories</Text>
                    </Link>
                </TouchableOpacity>
                {isAuthorized ? (
                  <>
                    <TouchableOpacity style={[t.pT2,]}>
                        <Link to="/signin">
                          <Text
                            style={[t.text2xl, t.textGray400, t.pL12, t.trackingWide]}
                          >Sign In</Text>
                        </Link>
                    </TouchableOpacity>
                  </>
                 ) : (
                  <>
                    <Link to="/">
                        <TouchableOpacity 
                            style={[t.pT2, t.text2xl,  t.textGray400, t.pL12, t.trackingWide]}
                            onPress={() => signOut()}
                            >
                            <Text
                            style={[t.text2xl,  t.textGray400, t.pL12, t.trackingWide]}
                            >Log out</Text>
                        </TouchableOpacity>
                    </Link>
                  </>
                )}
            </ScrollView>
        </View>
    );
};

export default AppBar;