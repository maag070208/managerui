export interface INavItems {
    name: string;
    basePath: string;
    icon: string;
    child: INavChildItems[];
}

interface INavChildItems {
    name: string;
    path: string;
    action?: boolean;
    role?: string[];
}