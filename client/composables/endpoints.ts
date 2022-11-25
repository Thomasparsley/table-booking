import useApiFetch from "./useApiFetch";

//#region Rooms
export async function fetchRooms() {
    const { data } = await useApiFetch("/rooms");
    return data.value;
}

export async function fetchRoomById(id: string) {
    const { data } = await useApiFetch(`/rooms/?id=${id}`);
    return data.value;
}

//#endregion

//#region Tables
export async function fetchTables() {
    const { data } = await useApiFetch("/tables");
    return data.value;
}

export async function fetchTableById(id: string) {
    const { data } = await useApiFetch(`/tables/?id=${id}`);
    return data.value;
}

//#endregion

//#region Users
export async function fetchUsers() {
    const { data } = await useApiFetch("/users");
    return data.value;
}

export async function fetchUserById(id: string) {
    const { data } = await useApiFetch(`/users/?id=${id}`);
    return data.value;
}
//#endregion