export enum UserPermissions {
    MANAGE_ROOMS = 1 << 0,
    MANAGE_TABLES = 1 << 1,
    SET_TABLE_FEATURES = 1 << 2,
    MANAGE_TABLE_FEATURES = 1 << 3,
    ALL = ~(~1 << 3)
}