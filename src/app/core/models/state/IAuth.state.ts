import { IAuthUser } from "../auth/IAuthUser.model";

export interface AuthState {
    token: string;
    authUser: IAuthUser;
    isAuthenticated: boolean;
}

