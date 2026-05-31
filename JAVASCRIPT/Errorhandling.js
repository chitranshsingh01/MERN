function searchFood(item) {
    return new Promise((resolve, reject) => {
        console.log(`searching start for ${item} .....`);

        setTimeout(() => {
            console.log(`Select ${item}`);

            resolve({
                item: item,
                available: true
            });
        }, 2000);
    });
}

function orderFood(item) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let orderId = 115520;

            console.log(
                `order created successfully with id no. ${orderId}`
            );

            resolve({
                item: item,
                id: orderId
            });
        }, 2000);
    });
}

function payment(item, id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(
                `payment starting for ${item} with id no. ${id}`
            );

            let paymentStatus = false; // change to true for success

            if (paymentStatus) {
                resolve("SUCCESS");
            } else {
                reject(
                    new Error(
                        "Payment Rejected due to some technical Error with status false"
                    )
                );
            }
        }, 2000);
    });
}

async function foodOrder(item) {
    try {
        let res1 = await searchFood(item);
        let res2 = await orderFood(res1.item);
        let res3 = await payment(res2.item, res2.id);
        console.log(
            "Payment successful with status",
            res3
        );
    } catch (err) {
        console.log("Error:", err.message);
    }
}

foodOrder("kadai panner");