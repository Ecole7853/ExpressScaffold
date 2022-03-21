const users = {
    getAllUsers: (req, res) => {
        res.send({firstName: "Eric", lastName: "Cole", location: "Pasadena"});
    },
};

module.exports = users;