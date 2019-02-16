const expect = require('expect');

const {Users} = require('./users');

describe('Users',()=>{
var users;
  beforeEach(()=>{
    users=new Users();
    users.users=[{
      id:'123',
      name:'peter',
      room:'Avenger',
    },{
    id:'1234',
    name:'steve',
    room:'Shield'
  },
  {
  id:'12345',
  name:'stark',
  room:'Avenger'
}
]
  })
  it('Should add new user',()=>{
    var users = new Users();
    var user = {
      id:'123',
      name:'santhosh',
      room:'frozen fever'
    }
    var resUser = users.addUser(user.id,user.name,user.room);

    expect(users.users).toEqual([user]);
  })
  it('should return names for avengers',()=>{
    var userList = users.getUserList('Avenger');
    expect(userList).toEqual(['peter','stark']);
  })
  it('should return names for Shield',()=>{
    var userList = users.getUserList('Shield');
    expect(userList).toEqual(['steve']);
  })
  it('should remove user',()=>{
    var userId = '123';
    var user =users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2)
  })
  it('should not remove user',()=>{
    var userId = '9876';
    var user =users.removeUser(userId);

    expect(user).toBeUndefined();
    expect(users.users.length).toBe(3)
  })
  it('should find user',()=>{
    var userId='123';
    var user=users.getUser(userId);

    expect(user.id).toBe(userId);
  })
  it('should not find user',()=>{
    var userId='13';
    var user=users.getUser(userId);

    expect(user).toBeUndefined()
  })
})
