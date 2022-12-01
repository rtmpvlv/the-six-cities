export const ActionType = {
  CHANGE_CITY: `@city/changeCity`,
  SORT_CHANGE: `@sort/sortChange`,
  HOVER_ELEMENT: `@hover/element`,
  OFFERS_LIST_LOAD: `@offersList/Load`,
  OFFERS_LIST_UPDATE: `@offersList/Update`,
  CHANGE_AUTHORIZATION_STATUS: `@user/changeAuthorizationStatus`,
  UPDATE_USER_DATA: `@user/updateUserData`,
  LOAD_COMMENTS: `@comments/loadComments`,
  LOGOUT: `@user/logout`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  changeSort: (sortType) => ({
    type: ActionType.SORT_CHANGE,
    payload: sortType,
  }),
  hoverElement: (offer) => ({
    type: ActionType.HOVER_ELEMENT,
    payload: offer,
  }),
  offersListLoad: (offers) => ({
    type: ActionType.OFFERS_LIST_LOAD,
    payload: offers,
  }),
  offersListUpdate: () => ({
    type: ActionType.OFFERS_LIST_UPDATE,
  }),
  requiredAuthorization: (status) => ({
    type: ActionType.CHANGE_AUTHORIZATION_STATUS,
    payload: status,
  }),
  updateUserData: (email) => ({
    type: ActionType.UPDATE_USER_DATA,
    payload: email,
  }),
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
};
