import { defineStore } from "pinia";

// Create new store
export const useItemsStore = defineStore('items', {
    // Store attributes
    state: () => ({

        items : [
            {
                count : 5,
                name: 'item 1',
                price: 10,
            },
            {
                count : 2,
                name: 'item 2',
                price: 8,
            },
        ],
    }),

    // Store actions / functions
    actions: {

        increment(itemNb){
          this.items[itemNb].count++;
        },

        add(newItem){
            console.log(newItem);
            this.items.push(
                {
                    count : newItem.count,
                    name : newItem.name,
                    price : newItem.price,
                }
            );
        },
    }

})
