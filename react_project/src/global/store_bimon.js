import createStore from "unistore";
import axios from 'axios';

const allState = {
    user_credential: {
        full_name: '',
        user_name: '',
        email: '',
        bio: '',
        api_key: '',
        profile_image: '',
        is_login: false,
        is_remembered: false
    }
};


export const store = createStore(allState);

export const actions = store => ({

    handleIsRememberState: (state, el) =>{
        // console.log(el.target.checked);
        // { someProperty: { ...this.state.someProperty, flag: false} }
        store.setState({user_credential: {...store.state, is_remembered: el.target.checked}});
    },


    storeHandleLogin: async(state, is_remembered) => {
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


