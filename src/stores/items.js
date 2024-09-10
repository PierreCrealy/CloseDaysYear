import { defineStore } from "pinia";

export const useItemsStore = defineStore('items', {
    state: () => ({count: 0, name: 'Item 1'}),
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        increment(){
            this.count++
        },
        setName(newName){
            this.name = newName;
        }

    }

})