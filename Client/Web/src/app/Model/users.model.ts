export class Param {
    input: string;
    value: string;
}

export class Action {
    Service: string;
    ServiceName: string;
    name: string;
    token: any;
    param: Param[];
}


export class ActReact {
    id: string;
    action: Action;
    reaction: Action;
}

export class Users {
    id: string;
    actReact: ActReact[];
    firstName: string;
    lastName: string;
}
