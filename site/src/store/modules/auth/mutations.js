export default {
    SET_token: (state, token) => {
        state.tokens.access = token;
        localStorage.setItem("TOKEN", token);
    }
}