function getUser() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve({
                id: 1,
                name: "Mayur"
            });

        }, 1000);

    });
}

module.exports = getUser;