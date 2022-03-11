class User {
    constructor(id, username, password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }
}

class UserService {
    constructor(users = []) {
        this.users = users;
    }

    getAllUsers() {
        return this.users;
    }

    getUserById(userId) {
        return this.users.filter((users) => users.id == userId);
    }
}

// Kode untuk uji coba
// const user1 = new User(1, "A", 123);
// const user2 = new User(2, "B", 123);
// const user3 = new User(3, "C", 123);
// const user4 = new User(4, "D", 123);

// userService = new UserService([user1, user2, user3, user4]);
// console.log(userService.getAllUsers());
// console.log(userService.getUserById(1));