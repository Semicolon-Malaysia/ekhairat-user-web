import { ActionTree, GetterTree, MutationTree } from "vuex";

import { RootState } from "~/store";

export const state = () => ({
  membershipData: {} as any
});

export type MembershipState = ReturnType<typeof state>;

export const getters: GetterTree<MembershipState, RootState> = {
  //
};

export const mutations: MutationTree<MembershipState> = {
  setMembershipData: (state, data) => {
    state.membershipData = data;
  }
};

export const actions: ActionTree<MembershipState, RootState> = {
  //
};
