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
}

interface updateRoom extends newRoom {
}

export async function createRoom(newRoom: newRoom) {
    const { data } = await useApiFetch("/rooms", {
        method: "POST",
        body: JSON.stringify(newRoom)
    });
    return data.value;
}

export async function updateRoom(newRoom: newRoom) {

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

//#endregion

//#region Users
interface ClientUser {
    email: string,
    password: string,

}

export async function fetchUsers() {
    const { data } = await useApiFetch("/users");
    return data.value;
}

export async function fetchUserById(id: string) {
    const { data } = await useApiFetch(`/users/${id}`);
    return data.value;
}

export async function fetchSelf() {
    const token = useParseCookies(document.cookie);
    const { data } = await useApiFetch("/users/me", {
        method: "POST",
        credentials: "include",
        headers: {
            cookie: `${tokenName}=${token}`,
        }
    });
    if (data && data.value) {
        console.log()
        //@ts-ignore
        return data.value[0];
    }
    return null;
}
//#endregion