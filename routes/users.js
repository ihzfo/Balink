// For the assignement purpose I will mockup the result of a DataBase.

let usersInfo = [
    {firstname : "Nathan", lastname : "Coupermant", id : 0, email : "coupermantn@gmail.com"},
    {firstname : "Test", lastname : "Test", id : 1, email : "test@gmail.com"}
];

module.exports = {

    getUsers : function getUsers(){
        return usersInfo;
    }
}
