export default {
    AUTHENTICATION_TEST: ({ rootGetters }) => {
        let xhr = new XMLHttpRequest();

        let promise = new Promise((resolve, reject) => {
            xhr.open(
                "GET",
                rootGetters.endpoints('BASE') + rootGetters.endpoints('VAL_TOKEN')
            );
            xhr.setRequestHeader("Content-Type", "Application/json");
            xhr.onload = () => {
                resolve(xhr);
            };
            xhr.onerror = () => {
                reject(xhr)
            }
            xhr.send();
        })

        return promise;
    },
    AUTHORIZATION_TEST: ({ rootGetters }) => {
        let xhr = new XMLHttpRequest();

        let promise = new Promise((resolve, reject) => {
            xhr.open(
                "POST",
                rootGetters.endpoints('BASE') + rootGetters.endpoints('VAL_TOKEN')
            );
            xhr.setRequestHeader("Content-Type", "Application/json");
            xhr.onload = () => {
                resolve(xhr);
            };
            xhr.onerror = () => {
                reject(xhr)
            }
            xhr.send();
        })

        return promise;
    },
    LOAD: ({ commit, getters, dispatch }) => {
        let token = getters.GET_token;

        dispatch("AUTHENTICATION_TEST", token).then((xhr) => {
            if (xhr.status == 200) {
                commit("SET_AUTHENTICATION", true)
            }
        });
        dispatch("AUTHORIZATION_TEST", token).then((xhr) => {
            if (xhr.status == 200) {
                commit("SET_AUTHORIZATION", true)
            }
        });
    }
}