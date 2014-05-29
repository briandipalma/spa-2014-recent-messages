import Store from 'flux-es6';

import RecentMessagesConstants from './RecentMessagesConstants';

var recentMessages = new Map();

export default class extends Store {
    getState() {
        return recentMessages;
    }

    handleDispatcherAction(payload) {
        var action = payload.action;

        switch (action.actionType) {
            case RecentMessagesConstants.MESSAGE_ARRIVED:
                messageArrived(action.userName);
                break;
            case RecentMessagesConstants.MESSAGE_SELECTED:
                messageSelected(action.userName);
                break;
            case RecentMessagesConstants.USER_STATUS_CHANGED:
                userStatusChanged(action.userName, action.status);
                break;
            case RecentMessagesConstants.MESSAGE_LIST_ARRIVED:
                
                break;
            default:
                return true;
        }

        this.emitChange();

        return true;
    }
}

function messageArrived(userName) {
    var userState = recentMessages.get(userName);
    
    if (userState.selected !== "selected") {
        userState.messageOutstanding = "message-outstanding";
    }
}

function messageSelected(userName) {
    var userState = recentMessages.get(userName);

    userState.messageOutstanding = "";
}

function userStatusChanged(userName, status) {
    var userState = recentMessages.get(userName);

    userState.userStatus = status;
}

function messageListArrived(messagesState) {
    recentMessages = messagesState;
}