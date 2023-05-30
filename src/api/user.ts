import request, {BASE_URL} from "@/utils/request";

export function adminLogin(data: {phone: string; password: string}) {
    return request('/login', {
        method: 'POST',
        data,
        baseURL: BASE_URL + '/api/user/v1'
    })
}

export function checkAminRole() {
    return request('/detail', {
        baseURL: BASE_URL + '/api/user/v1'
    })
}