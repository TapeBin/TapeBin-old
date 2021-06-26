export const KEY_LENGTH = 10;

export interface MongoUser {
    githubId?: string;
    discordId?: string;
    username: string;
    __v:  number;
    _id: string;
}