export function getBasket() {
    if (!localStorage.getItem("basket")) {
        localStorage.setItem("basket", JSON.stringify([]));
    }
    return {
        getItems: function () {
            return JSON.parse(localStorage.getItem("basket"));
        },
        getValue: function () {
            const items = this.getItems();
            let value = 0;
            for (let item of items) {
                value += item.price * item.quantity;
            }
            return value;
        },
        getQuantity: function () {
            const items = this.getItems();
            let qty = 0;
            for (let item of items) {
                qty += item.quantity;
            }
            return qty;
        },
        addItem: function (newItem) {
            // console.log("called with " + newItem)
            const items = this.getItems();
            for (let item of items) {
                if (item.name === newItem.name) {
                    if (item.quantity === 5) 
                        throw new RangeError("Comanda maxima: 5 bucati.")
                    item.quantity++;
                    localStorage.setItem("basket", JSON.stringify(items));
                    return;
                }
            }
            items.push({
                name: newItem.name,
                price: newItem.price, 
                quantity: 1
                }
            );
            console.log(items);
            localStorage.setItem("basket", JSON.stringify(items));
        },
        updateItems: function (items) {
            localStorage.setItem("basket", JSON.stringify(items));
        } 
    }
}

