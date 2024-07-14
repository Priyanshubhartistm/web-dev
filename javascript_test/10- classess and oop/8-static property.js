class User {
    constructor(username){
        this.username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    createdId(){
        return `123`
    }
}

    const priyanshu = new User("priyanshu")
    //priyanshu.createdId()
    
    //console.log(priyanshu.createdId());


    class Teacher extends User{
        constructor(username,email){
            super(username)
            this.email = email
        }
    }
const iphone = new Teacher("iphone","iphone@.com")
//iphone.logMe();
console.log(iphone.createdId);
//console.log(iphone.logMe());