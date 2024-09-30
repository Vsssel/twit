export type UserGetRequest = {
    userId: number
}

export type UserGetResponse = {
    message: string;
    data: {
        id: number;
        name: string;
        username: string;
        email: string;
        address: {
            street: string
            suite: string;
            city: string;
            zipcode: string;
            geo: {
                lat: string;
                lng: string
            }
        };
        phone: string;
        website: string;
        company: {
            name: string;
            catchPhrase: string;
            bs: string;
        }
    } | null
}

export type UserPostResponse = {
    userId: number;
    id: number;
    title: string;
    body: string;
}[]

export type UserPostRequest = {
    id: number;
}

export type UserAlbumsRequest = {
    userId: number;
}

export type UserAlbumsResponse = {
    userId: number;
    id: number;
    title: string;
}[]

export type UserTodosRequest = {
    userId: number;
}

export type UserTodosResponse = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}[]