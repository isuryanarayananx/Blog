export default {
  GET_token({ commit, rootGetters }, payload) {
    let xhr = new XMLHttpRequest();

    let promise = new Promise((resolve, reject) => {
      xhr.open(
        "POST",
        rootGetters.endpoints("BASE") + rootGetters.endpoints("GET_TOKEN")
      );
      xhr.setRequestHeader("Content-Type", "Application/json");
      xhr.onload = () => {
        resolve(xhr);
      };
      xhr.onerror = () => {
        reject(xhr);
      };
      xhr.send(JSON.stringify(payload));
    });

    promise.then((xhr) => {
      if (xhr.status == 200) {
        commit("SET_token", JSON.parse(xhr.response).token, { root: true });
      }
    });
    return promise;
  },
  REF_token({ commit, rootGetters }, payload) {
    let xhr = new XMLHttpRequest();

    let promise = new Promise((resolve, reject) => {
      xhr.open(
        "POST",
        rootGetters.endpoints("BASE") + rootGetters.endpoints("REF_TOKEN")
      );
      xhr.setRequestHeader("Content-Type", "Application/json");
      xhr.onload = () => {
        resolve(xhr);
      };
      xhr.onerror = () => {
        reject(xhr);
      };
      xhr.send(JSON.stringify({ token: payload }));
    });

    promise.then((xhr) => {
      if (xhr.status == 200) {
        commit("SET_token", JSON.parse(xhr.response).token, { root: true });
      }
    });
    return promise;
  },
  VAL_token({ rootGetters }, token) {
    let xhr = new XMLHttpRequest();

    let promise = new Promise((resolve, reject) => {
      xhr.open(
        "GET",
        rootGetters.endpoints("BASE") + rootGetters.endpoints("VAL_TOKEN")
      );
      xhr.setRequestHeader("Content-Type", "Application/json");
      xhr.setRequestHeader("Authorization", "JWT " + token);
      xhr.onload = () => {
        resolve(xhr);
      };
      xhr.onerror = () => {
        reject(xhr);
      };
      xhr.send();
    });

    return promise;
  },
  GET_USER({ rootGetters }, payload) {
    let xhr = new XMLHttpRequest();

    let promise = new Promise((resolve, reject) => {
      xhr.open(
        "POST",
        rootGetters.endpoints("BASE") + rootGetters.endpoints("GET_USER")
      );
      xhr.setRequestHeader("Content-Type", "Application/json");
      xhr.onload = () => {
        resolve(xhr);
      };
      xhr.onerror = () => {
        reject(xhr);
      };
      xhr.send(JSON.stringify({ token: payload }));
    });

    return promise;
  },
};
