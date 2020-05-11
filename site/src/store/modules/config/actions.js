export default {
    HANDLER: ({ dispatch }, e) => {
        if (e.key == "TOKEN") {
            dispatch("AUTH_TEST")
        }
    },
    AUTH_TEST: ({ getters, rootGetters, commit }) => {
        let xhr = new XMLHttpRequest();
        let promise = new Promise((resolve, reject) => {
            xhr.open(
                "GET",
                rootGetters.endpoints('BASE') + rootGetters.endpoints('VAL_TOKEN')
            );
            xhr.setRequestHeader("Content-Type", "Application/json");
            xhr.setRequestHeader("Authorization", "JWT " + getters.GET_token);
            xhr.onload = () => {
                resolve(xhr);
            };
            xhr.onerror = () => {
                reject(xhr)
            }
            xhr.send();
        })

        promise.then((xhr) => {
            if (xhr.status == 200) {
                console.log(JSON.parse(xhr.response));

                let authentication = JSON.parse(xhr.response).authenticated;
                commit("SET_AUTHENTICATION", authentication)
                let authorization = JSON.parse(xhr.response).authorized;
                commit("SET_AUTHORIZATION", authorization)
            } else {
                commit("SET_AUTHENTICATION", false)
                commit("SET_AUTHORIZATION", false)
            }
        });
    }
}