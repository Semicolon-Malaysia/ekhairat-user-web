import { ActionTree, GetterTree, MutationTree } from "vuex";

export const state = () => ({
  user: {
    full_name: "Muhammad Affiq bin Zaini",
    ic_number: "969613-26-5027",
    phone_no: "011-11283226",
    membership_status: { id: 1, value: "Active" }
  }
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  //
};

export const mutations: MutationTree<RootState> = {};

export const actions: ActionTree<RootState, RootState> = {};
