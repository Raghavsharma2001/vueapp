import { reactive, onMounted, onUnmounted } from "vue";

const state = reactive({
    isSmallScreen: false,
    name: 'Euda',
    email: '',
    isSidebarVisible: false,
    loggedIn: false,
});

const changeEmail = (newEmail) => {
    state.email = newEmail;
};
const changeSidebarVisibility = (newVisibility) => {
    state.isSidebarVisible = newVisibility;
};

const changeIsSmallScreen = (newIsSmallScreen) => {
    state.isSmallScreen = newIsSmallScreen;
};
const changeLoggedIn = (newLoggedIn) => {
    state.loggedIn = newLoggedIn;
};
export default {
    state,
    changeEmail,
    changeSidebarVisibility,
    changeIsSmallScreen,
    changeLoggedIn
}
