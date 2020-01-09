import createStore from "unistore";
import axios from 'axios';

const allState = {
    userCredential: {
        fullName: '',
        userName: '',
        email: '',
        bio: '',
        apiKey: '',
        profileImage: '',
        isLogin: false,
        isRemembered: false
    }
};

export const store = createStore(allState);

export const actions = store => ({

    handleIsRememberState: (state, el) =>{
        // console.log(el.target.checked);
        // { someProperty: { ...this.state.someProperty, flag: false} }
        store.setState({userCredential: {...store.state, isRemembered: el.target.checked}});
    },

    storeHandleLogin: async(state, isRemembered) => {
        store.setState({
            userCredential: {
                userName: "bimon", 
                email: "bimon@alterra.id",
                apiKey: "1234567890",
                isLogin: true,
                isRemembered: isRemembered
            }
        })
    },

    handleLogout: (state, event) => {
        store.setState({userCredential: {...store.state, isLogin: false}})
    }
})