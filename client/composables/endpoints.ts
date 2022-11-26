import useApiFetch from "./useApiFetch";

const tokenName = "token";

//#region Rooms
export async function fetchRooms() {
    const { data } = await useApiFetch("/rooms");
    return data.value as any[];
}

export async function fetchRoomById(id: string) {
    const { data } = await useApiFetch(`/rooms/${id}`);
    return data.value;
}

interface newRoom {
    name: string;
    place: string;
    description: string;
}

interface updateRoom extends newRoom { }

export async function createRoom(newRoom: newRoom) {
    const { data } = await useApiFetch("/rooms", {
        method: "POST",
        body: JSON.stringify(newRoom)
    });
    return data.value;
}

export async function updateRoom(id: string, room: newRoom) {
    const { data } = await useApiFetch(`/rooms/${id}`, {
        method: "PUT",
        body: JSON.stringify(room)
    });
    return data.value;
}

export async function fetchTablesInRoom(id: string) {
    const { data } = await useApiFetch(`/rooms/tables/${id}`);
    return data.value;
}
//#endregion

//#region Tables
export async function fetchTables() {
    const { data } = await useApiFetch("/tables");
    return data.value;
}

export async function fetchTableById(id: string) {
    const { data } = await useApiFetch(`/tables/${id}`);
    return data.value;
}


interface newTable {
}

export async function createNewTable(table: newTable) {
    const { data } = await useApiFetch("/tables", {
        method: "POST",
        credential: "include",
        body: JSON.stringify(table),
    });
    return data.value;
}

export async function updateTable(id: string, table: newTable) {
    const { data } = await useApiFetch(`/tables/${id}`, {
        method: "PUT",
        body: JSON.stringify(table)
    });
    return data.value;
}
//#endregion

//#region Features

export async function createTableFeature(name: string) {
    const { data } = await useApiFetch("/features/tables", {
        method: "POST"
    });
}


//#endregion

//#region Users

export interface DtoNewUser {
    email: string;
    password: string;
}

export interface DtoUpdateUser extends DtoNewUser {
    phone: string;
    avatar: string;
    following: string[];
}

export async function fetchUsers() {
    const { data } = await useApiFetch("/users");
    return data.value;
}

export async function updateUser(id: string, newUser: DtoUpdateUser) {
    const { data } = await useApiFetch(`/users/${id}`, {
        method: "PUT",
        body: newUser
    });
}

export async function deleteUser(id: string) {
    /* const { data } = await useApi */
}

export async function fetchUserById(id: string) {
    const { data } = await useApiFetch(`/users/${id}`);
    return data.value;
}

export async function fetchSelf() {
    const token = useParseCookies(document.cookie);
    const { data } = await useApiFetch("/users/me", {
        credentials: "include",
        headers: {
            cookie: `${tokenName}=${token}`,
        }
    });

    return data.value;
}

export async function addFollow(id: string) {
    const token = useParseCookies(document.cookie);
    const { data } = await useApiFetch(`/users/follow/${id}`, {
        credentials: "include",
        headers: {
            cookie: `${tokenName}=${token}`,
        },
        method: "post"
    });

    return data.value;
}

export async function deleteFollow(id: string) {
    const token = useParseCookies(document.cookie);
    const { data } = await useApiFetch(`/users/follow/${id}`, {
        credentials: "include",
        headers: {
            cookie: `${tokenName}=${token}`,
        },
        method: "delete"
    });
}
//#endregion