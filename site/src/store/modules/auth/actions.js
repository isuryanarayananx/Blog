export default {
    GET_token({ commit, getters }, payload) {

        let xhr = new XMLHttpRequest();

        let promise = new Promise((resolve, reject) => {
            xhr.open(
                "POST",
                getters.GET_endpoints('BASE') + getters.GET_endpoints('GET_TOKEN')
            );
            xhr.setRequestHeader("Content-Type", "Application/json");
            xhr.onload = () => {
                resolve(xhr);
            };
            xhr.onerror = () => {
                reject(xhr)
            }
            xhr.send(JSON.stringify(payload));
        })

        promise.then((xhr) => {
            if (xhr.status == 200) {
                commit("SET_token", JSON.parse(xhr.response).token);
            }
        });

        return promise;
    }
}