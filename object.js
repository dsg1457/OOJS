function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
}  

User.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'has logged in');
}

User.prototype.login = function(){
    this.online = false;
    console.log(this.email, 'has logged out');
}

function Admin(...args){
    User.apply(this, args);
    this.role = 'super admin';

}
Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(){
    users =users.filter(user => {
        return user. email != user.email
    })
};

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mario.com', 'Yoshi');
var admin = new Admin('shaun@ninjas.com', 'Shaun');

var users = [userOne, userTwo, admin];

console.log(admin);
