import { Data, TransactionEntity } from "@/types/store";
import { createStore, useStore, Store } from "vuex";
import { InjectionKey } from "vue";

export interface State {
  data: Data;
  isLoggedIn: boolean;
  lastLogInTime: Date;
  encryptedPassword: string;
}

export const key: InjectionKey<Store<State>> = Symbol();

export default createStore<State>({
  state: {
    data: {
      createdAt: new Date(),
      entities: [],
      modifiedAt: new Date(),
    },
    encryptedPassword: "",
    isLoggedIn: false,
    lastLogInTime: new Date(),
  },
  mutations: {
    setData(s, d: Data) {
      s.data = d;
    },

    setEntities(s, es: TransactionEntity[]) {
      s.data.entities = es;
    },

    addEntity(s, e: TransactionEntity) {
      s.data.entities.push(e);
    },

    setEncryptedPassword(s, ep: string) {
      s.encryptedPassword = ep;
    },

    setLastLoginTime(s, t) {
      s.lastLogInTime = t;
    },
  },
  // actions: {},
  // modules: {},
});

export function gimmeStore(): Store<State> {
  return useStore(key);
}
