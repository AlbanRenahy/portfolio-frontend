/**
 * Initial State
 */
const initialState = {
  isMenuOpen: false,
  isMobileMenuOpen: false,
  view: "Bienvenue",
  isContactOpen: false,
  clickCounter: 0,
};

/**
 * Types
 */
export const OPEN_MENU = "OPEN_MENU";
export const CLOSE_MENU = "CLOSE_MENU";
export const CHANGE_VIEW = "CHANGE_VIEW";
export const OPEN_CONTACT = "OPEN_CONTACT";
export const CLOSE_CONTACT = "CLOSE_CONTACT";
export const OPEN_MOBILE_MENU = "OPEN_MOBILE_MENU";
export const CLOSE_MOBILE_MENU = "CLOSE_MOBILE_MENU";
export const INCREASE_CLICK_COUNTER = "INCREASE_CLICK_COUNTER";

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
    case OPEN_MOBILE_MENU:
      return {
        ...state,
        isMobileMenuOpen: true,
      };
    case CLOSE_MOBILE_MENU:
      return {
        ...state,
        isMobileMenuOpen: false,
      };
    case CHANGE_VIEW:
      return {
        ...state,
        view: action.view,
      };
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
    case INCREASE_CLICK_COUNTER:
      return {
        ...state,
        clickCounter: state.clickCounter + 1,
      };
    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const openMobileMenu = () => ({
  type: OPEN_MOBILE_MENU,
});
export const closeMobileMenu = () => ({
  type: CLOSE_MOBILE_MENU,
});
export const openMenu = () => ({
  type: OPEN_MENU,
});
export const closeMenu = () => ({
  type: CLOSE_MENU,
});
export const changeView = (view) => ({
  type: CHANGE_VIEW,
  view,
});
export const openContact = () => ({
  type: OPEN_CONTACT,
});
export const closeContact = () => ({
  type: CLOSE_CONTACT,
});
export const increaseClickCounter = () => ({
  type: INCREASE_CLICK_COUNTER
})

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
