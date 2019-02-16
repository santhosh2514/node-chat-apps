// class Person {
//   constructor(name,age) {
//     this.name=name;      //using a constructor to create the object
//     this.age=age;
//   }
//   getUserDescription() {
//     return `${this.name} is ${this.age} years old.`;
//   }
// }
// var me = new Person('Santhosh',19);    //creating a instance of the class
// var description = me.getUserDescription();
// console.log(description);

[{

}]

class Users {
  constructor() {
    this.users = []
  }
  addUser (id,name,room) {
    var user = {
      id:id,
      name:name,
      room:room
    }
    this.users.push(user);
    return user;
  }
  removeUser(id){
    // return user that was removed
    var user=this.getUser(id);
    if(user){
      this.users=this.users.filter((user)=>user.id !== id);
    }
    return user;
  }
  getUser(id){
      return this.users.filter((user)=> user.id===id)[0];
  }
  getUserList(room){
    var users = this.users.filter((user)=>{
      return user.room === room;
    })
    var namesArray = users.map((user)=>{
      return user.name;
    })
    return namesArray;
  }
}

module.exports ={Users};
