import React from 'react';
const AppContext = React.createContext({
    state: {},
    dispatch: () => ({})
});
export default AppContext;