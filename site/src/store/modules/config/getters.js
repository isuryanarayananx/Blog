export default {
    GET_token: () => {
        return localStorage.getItem("TOKEN");
    },
    GET_authorized: (state) => {
        return state.authorized;
    },
    GET_authenticated: (state) => {
        return state.authenticated;
    }
}