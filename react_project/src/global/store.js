import createStore from 'unistore'
import axios from 'axios'

const inisialization = {
    isLogin: false,
}

export const store = createStore(inisialization)

export const actions = store => (
{
    handleChange: (state, event) => {
        console.warn(event.target.value)
        store.setState({[event.target.name]: event.target.value})
    }
}
)