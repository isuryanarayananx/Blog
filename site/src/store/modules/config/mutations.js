export default {
    SET_AUTHENTICATION: (state, val) => {
        state.authenticated = val;
    },
    SET_AUTHORIZATION: (state, val) => {
        state.authorized = val;
    },
}