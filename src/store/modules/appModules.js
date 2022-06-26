const state = {
  appScrollX: 0,
  appScrollY: 0,
  screenWidth: 0,
  screenHeight: 0,
};

const getters = {
  get_appScrollX(state) {
    return state.appScrollX;
  },
  get_appScrollY(state) {
    return state.appScrollY;
  },
  get_screenWidth(state) {
    return state.screenWidth;
  },
  get_screenHeight(state) {
    return state.screenHeight;
  },
};

const actions = {
  set_appScrollX(ctx, payload) {
    ctx.commit("update_appScrollX", payload);
  },
  set_appScrollY(ctx, payload) {
    ctx.commit("update_appScrollY", payload);
  },
  set_screenWidth(ctx, payload) {
    ctx.commit("update_screenWidth", payload);
  },
  set_screenHeight(ctx, payload) {
    ctx.commit("update_screenHeight", payload);
  },
};

const mutations = {
  update_appScrollX(state, item) {
    state.appScrollX = item;
  },
  update_appScrollY(state, item) {
    state.appScrollY = item;
  },
  update_screenWidth(state, item) {
    state.screenWidth = item;
  },
  update_screenHeight(state, item) {
    state.screenHeight = item;
  },
};

export default { state, getters, actions, mutations };
