// store.js
import { reactive } from 'vue';
import { useInjectStore, useProvideStore } from '../../../src';

const USER_STORE = Symbol('USER_STORE');

const state = reactive({
  name: '周杰伦',
  age: 28
});

const actions = {
  getYounger: () => {
    state.age -= 1;
  }
};

const content = {
  state,
  actions
};

export const createUserStore = useProvideStore(USER_STORE, content);

export const useUserStore = useInjectStore(USER_STORE);
