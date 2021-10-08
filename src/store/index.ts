import { reactive, readonly } from "vue";
import { Data, TransactionEntity } from "@/types/store";
import { setLocalStorageItem } from "@/utils";

export interface State {
  data: Data;
  isLoggedIn: boolean;
  lastLogInTime: Date;
  encryptedPassword: string;
}

export const s = reactive<State>({
  data: {
    createdAt: new Date(),
    entities: [],
    modifiedAt: new Date(),
  },
  encryptedPassword: "",
  isLoggedIn: false,
  lastLogInTime: new Date(),
});

export const setData = (data: Data) => {
  s.data = data;
  setLocalStorageItem("data", data);
};

export const setEntities = (es: TransactionEntity[]) => {
  s.data.entities = es;
  setLocalStorageItem("data", s.data);
};

export const addEntity = (e: TransactionEntity) => {
  s.data.entities.push(e);
  setLocalStorageItem("data", s.data);
};

export const setEncryptedPassword = (ep: string) => {
  s.encryptedPassword = ep;
  setLocalStorageItem("encryptedPassword", ep);
};

export const setLastLoginTime = (t: Date) => {
  s.lastLogInTime = t;
  setLocalStorageItem("lastLogInTime", t.toString());
};

export default {
  state: readonly(s),
  setData,
  setEntities,
  addEntity,
  setEncryptedPassword,
  setLastLoginTime,
};
