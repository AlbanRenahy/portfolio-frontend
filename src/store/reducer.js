/**
 * Initial State
 */
const initialState = {
  isMenuOpen: false,
  view: "Bienvenue",
  isContactOpen: false,
};

/**
 * Types
 */
export const OPEN_MENU = 'OPEN_MENU';
export const CLOSE_MENU = 'CLOSE_MENU';
export const CHANGE_VIEW = 'CHANGE_VIEW';
export const OPEN_CONTACT = 'OPEN_CONTACT';
export const CLOSE_CONTACT = 'CLOSE_CONTACT';

/**
 * Traitements
 */

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_MENU:
      return {
        ...state,
        isMenuOpen: true,
      };
    case CLOSE_MENU:
      return {
        ...state,
        isMenuOpen: false,
      };
    case CHANGE_VIEW:
      return {
        ...state,
        view: action.view,
      }
      case OPEN_CONTACT:
      return {
        ...state,
        isContactOpen: true,
      };
    case CLOSE_CONTACT:
      return {
        ...state,
        isContactOpen: false,
      };
    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const openMenu = () => ({
  type: OPEN_MENU,
});
export const closeMenu = () => ({
  type: CLOSE_MENU,
});
export const changeView = (view) => ({
  type: CHANGE_VIEW,
  view
});
export const openContact = () => ({
  type: OPEN_CONTACT
})
export const closeContact = () => ({
  type: CLOSE_CONTACT
})




/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;