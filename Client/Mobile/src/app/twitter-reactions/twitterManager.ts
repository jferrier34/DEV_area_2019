import { Injectable } from '@angular/core';
import { Reaction } from '../model';

@Injectable()
export class TwitterManager {
    public loggedIn: boolean;
    public ReactionTwitter = new Reaction()

    constructor() {
        this.loggedIn = false
        this.ReactionTwitter = new Reaction
        this.ReactionTwitter.name = "Twitter - New Post"
        this.ReactionTwitter.Service = "Twitter"
        this.ReactionTwitter.ServiceName = "twitter-post-status"
        this.ReactionTwitter.param = new Array()
        this.ReactionTwitter.param.push({input: "tweet", value: ""})
    }
}
