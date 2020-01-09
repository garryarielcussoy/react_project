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
        // console.log("masuk sini BOSS")
        // await axios
        // .post("https://bimon.free.beeceptor.com/auth", "")
        // .then(function (response) {
        //     if (response.data.hasOwnProperty("api_key")) {
        //         // console.log("nilai api_key", response.data.api_key);

        //         store.setState({
        //             user_credential: {
        //                 user_name: response.data.name, 
        //                 email: response.data.email,
        //                 api_key: response.data.api_key,
        //                 is_login: true
        //             }
        //         });
        //     }
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
    },

});