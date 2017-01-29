import axios from 'axios'

export async function init({store, redirect, isClient}) {
    if (isClient) return

    try {
        const res = await axios.get(`${process.env.API}`)
        store.commit('init', res.data)
    } catch (error) {
        redirect('/error')
    }
}