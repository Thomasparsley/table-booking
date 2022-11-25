export default async function (url: string, options: any = {}) {
    const path = useApiPath(url);
    const response = await useFetch(path, options);
    return response;
}
