export type SinglePostCommentsResource = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}[]

export type SinglePostResourse = {
    userId: number;
    id: number;
    title: string;
    body: string;
}[]

export type SinglePostRequest = {
    id: number;
}

export type SinglePostCommentsRequest = {
    id: number;
}