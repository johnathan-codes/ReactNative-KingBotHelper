export const getVillageInfo = (url) => {

    //const URL = `http://${url}/api/data?ident=villages/`;

    return fetch (url).then((data) => data.json());
}