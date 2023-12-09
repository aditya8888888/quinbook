// const useFetchUtil = () => { 
//     const FETCH_UTIL = async (url, payload, method, successCallback, failCallback) => {
//         const options = {
//             method: method,
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(payload.value),
//         };

//         try {
//             const response = await fetch(url, options)
//             const jsonResponse = await response.json()
//             callback(jsonResponse)
//         } catch (error) {
//             failCallback()
//         }
//     }

//     return {
//         FETCH_UTIL
//     }
// }

// export default useFetchUtil

// export default {
//     FETCH_UTIL: async (url, payload, method, successCallback, failCallback) => {
//         const options = {
//             method: method,
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(payload.value),
//         };

//         try {
//             const response = await fetch(url, options)
//             const jsonResponse = await response.json()
//             callback(jsonResponse)
//         } catch (error) {
//             failCallback()
//         }
//     }
// };

export const FETCH_UTIL = async (url, payload, method, successCallback, failCallback) => {
        const options = {
            method: method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload.value),
        };

        try {
            const response = await fetch(url, options)
            const jsonResponse = await response.json()
            callback(jsonResponse)
        } catch (error) {
            failCallback()
        }
}
//     import { FETCH_UTIL } from '../util/fetch-util'
// FETCH_UTIL()

//  const users = ref([])
//     const FETCH_USERS = () => {
//         FETCH_UTIL('https://8287548eb5f64e8caac27a223bac727a.api.mockbin.io/', {}, 'GET', response => {
//             users.value = response
//         }, () => {
//             // show toast to user
//         })
//     }