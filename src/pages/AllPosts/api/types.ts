export type PostsResponse = {
    userId: number;
    id: number;
    title: string;
    body: string;
}[]

export type NewPostPostRequest = {
    title: string;
    body: string;
    userId: number;
}

export type NewPostPostResponse = {
    message: string
}