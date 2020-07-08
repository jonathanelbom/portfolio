function AppReducer(state, action) {
    console.log('AppReducer\naction:', action, '\nstate:', state, '\n\n');
    switch (action.type) {
        default:
            throw state;
    }
}
export default AppReducer;
