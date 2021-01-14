import { persist } from 'mobx-persist';
import { observable, action, computed } from 'mobx';

class AuthStore {
  @persist @observable token = '';

  @computed getAccessToken() {
    return this.token;
  }

  @action setAccessToken(token) {
    this.token = token;
  }

  @action removeAccessToken() {
    this.token = '';
  }
}

export default AuthStore;