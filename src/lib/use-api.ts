import { Api, HttpClient } from "@/api/generated/Api"

export const useApi = () => {
    const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL

    const httpClient = new HttpClient({
        baseURL,
    })

    return new Api(httpClient)
}