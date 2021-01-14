import { create } from 'mobx-persist';

import AsyncStorage from '@react-native-async-storage/async-storage';

import AuthStore from './AuthStore';

const hydrate = create({
    storage: AsyncStorage,
    jsonify: true,
});

class RootStore {
    AuthStore = new AuthStore(this);

    constructor () {
        hydrate('auth', this.AuthStore);
    }
}

export default RootStore;