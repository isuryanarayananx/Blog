export default {
    GET_endpoints: (state, getters, rootState) => {
        return (key) => {
            return rootState.endpoints[key]
        }
    }
}