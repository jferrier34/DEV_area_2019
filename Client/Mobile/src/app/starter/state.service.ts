import { Injectable } from '@angular/core';
import { ActionReaction, Action, Reaction } from '../model'

@Injectable({
  providedIn: 'root'
})
export class StateService {
  public actionReaction: ActionReaction

  constructor() {
    this.actionReaction = new ActionReaction;
    this.clearActionReaction()
  }

  chooseAction(action: Action) {
    this.actionReaction.action = action;
  }
  chooseReaction(reaction: Reaction) {
    this.actionReaction.reaction = reaction;
  }
  isActionChoosed() {
    return (this.actionReaction.action !== undefined)
  }
  isReactionChoosed() {
    return this.actionReaction.reaction !== undefined;
  }
  isActionReactionChoosed() {
    return (this.isActionChoosed() && this.isReactionChoosed())
  }
  clearActionReaction() {
    this.actionReaction.action = void 0
    this.actionReaction.reaction = void 0
  }
}
