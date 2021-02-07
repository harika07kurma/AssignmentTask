export class Users{
    items: Items[];
}

export class Items{
    name: string;
    description: string;
    stargazersCount: number;
    openIssuesCount: number;
    owner: Owner;
}

export class Owner{
    avatarUrl: string;
    login: string;
}