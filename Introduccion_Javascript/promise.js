const applyDiscount = new Promise((resolve, reject) => {
    let discount = true;
    if (discount) {
        resolve('Discount applied');
    } else {
        reject('Discount not applied');
    }
});

console.log(applyDiscount);
