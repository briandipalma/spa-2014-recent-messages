export default {
    MESSAGE_ARRIVED: {},
    MESSAGE_SELECTED: {},
    USER_STATUS_CHANGED: {},
    MESSAGE_LIST_ARRIVED: {}
}

//MESSAGE_LIST_ARRIVED provides, the list of people who you are talking to. their status, arrived messages since last login.
//USER_STATUS_CHANGED toggles the user from online to offline.
//MESSAGE_SELECTED User clicks on one of the recent messages. If it has outstanding messages then clear that mark.
//MESSAGE_ARRIVED a message from a contact has arrived. If the contact is selected then it's not marked as message outstanding.