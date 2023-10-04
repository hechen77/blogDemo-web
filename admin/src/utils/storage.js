export const localStorage = {
    get(key){
        return window.localStorage.getItem(key)
    },
    set(key, value){
        JSON.stringify(window.localStorage.setItem(key, value))
    },
    remove(key){
        window.localStorage.removeItem(key)
    }
}