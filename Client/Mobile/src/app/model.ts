export class Param {
    input: string;
    value: string;
}

export class Action {
    ServiceName: string;
    Service: string;
    name: string;
    token: any;
    param: Param[];
}

export class Reaction {
    ServiceName: string;
    Service: string;
    name: string;
    token: any;
    param: Param[];
}

export class ActionReaction {
    id: string;
    action: Action | undefined;
    reaction: Reaction | undefined;
}

export class Users {
    id: string;
    actionReaction: ActionReaction[];
    firstName: string;
    lastName: string;
}