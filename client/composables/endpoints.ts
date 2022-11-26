import useApiFetch from "./useApiFetch";

const tokenName = "token";

//#region Rooms
export async function fetchRooms() {
    const { data } = await useApiFetch("/rooms", {
        credentials: "include",
    });
    return data.value as any[];
}

export async function fetchRoomById(id: string) {
    const { data } = await useApiFetch(`/rooms/${id}`, {
        credentials: "include",
    });
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
        body: JSON.stringify(newRoom),
        credentials: "include",
    });
    return data.value;
}

export async function updateRoom(id: string, room: newRoom) {
    const { data } = await useApiFetch(`/rooms/${id}`, {
        method: "PUT",
        body: JSON.stringify(room),
        credentials: "include",
    });
    return data.value;
}

export async function fetchTablesInRoom(id: string) {
    const { data } = await useApiFetch(`/rooms/tables/${id}`, {
        credentials: "include",
    });
    return data.value;
}
//#endregion

//#region Tables
export async function fetchTables() {
    const { data } = await useApiFetch("/tables", {
        credentials: "include",
    });
    return data.value;
}

export async function fetchTableById(id: string) {
    const { data } = await useApiFetch(`/tables/${id}`, {
        credentials: "include",
    });
    return data.value;
}

export async function fetchAvailableTablesInDataRage(from: string, to: string) {
    const { data } = await useApiFetch(`/scheduler/tables?from=${from}&to=${to}`, {
        credentials: "include",
    });
    return data.value;
}

export async function fetchAvailableRoomsInDataRage(from: string, to: string) {
    const { data } = await useApiFetch(`/scheduler/rooms?from=${from}&to=${to}`, {
        credentials: "include",
    });
    return data.value;
}


export async function pushReservation(payload: any) {
    const { data } = await useApiFetch("/scheduler", {
        method: "POST",
        body: JSON.stringify(payload),
        credentials: "include",
    });
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
        body: JSON.stringify(table),
        credentials: "include",
    });
    return data.value;
}
//#endregion

//#region Features

export async function createTableFeature(name: string) {
    const { data } = await useApiFetch("/features/tables", {
        method: "POST",
        credentials: "include",
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
    const { data } = await useApiFetch("/users", {
        credentials: "include",
    });
    return data.value;
}

export async function updateUser(id: string, newUser: DtoUpdateUser) {
    const { data } = await useApiFetch(`/users/${id}`, {
        method: "PUT",
        body: JSON.stringify(newUser),
        credentials: "include",
    });
}

export async function deleteUser(id: string) {
    /* const { data } = await useApi */
}

export async function fetchUserById(id: string) {
    const { data } = await useApiFetch(`/users/${id}`, {
        credentials: "include",
    });
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

export async function fetchReservations(from: string) {
    const { data } = await useApiFetch(`/events/next?from=${from}`, {
        credentials: "include",
    });
    return data.value;
}