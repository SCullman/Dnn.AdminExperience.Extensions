import ActionTypes from "../constants/actionTypes/extensionsActionTypes";

const extensionsActions = {
    registerToolbarComponent(component) {
        return {
            type: ActionTypes.REGISTER_TOOLBAR_COMPONENT,
            data: {component}
        };
    },
    registerMultiplePagesComponent(component) {
        return {
            type: ActionTypes.REGISTER_MULTIPLE_PAGES_COMPONENT,
            data: {component}
        };
    },
    registerPageDetailFooterComponent(component) {
        return {
            type: ActionTypes.REGISTER_PAGE_DETAILS_FOOTER_COMPONENT,
            data: {component}
        };
    },
    registerSettingsButtonComponent(component) {
        return {
            type: ActionTypes.REGISTER_SETTINGS_BUTTON_COMPONENT,
            data: {component}
        };
    },
    registerPageTypeSelectorComponent(component) {
        return {
            type: ActionTypes.REGISTER_PAGE_TYPE_SELECTOR_COMPONENT,
            data: {component}
        };
    },
    registerAdditionalPanel(panel) {
        return {
            type: ActionTypes.REGISTER_ADDITIONAL_PANEL,
            data: {panel}
        };
    }
};

export default extensionsActions;