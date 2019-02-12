const expect = require('expect');

var {generateMessage,generateLocationMessage}=require('./message');
describe('generateMessage',()=>{
  it("should generate correct message object",()=>{
    var from ='Ygritte';
    var text = 'You know nothing jon snow';
    var message = generateMessage(from,text)

    expect(200)
    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({
      from,
      text
    })
  })
})

describe('generateLocationMessage',()=>{
  it('should generate correct location object',()=>{
    var from = 'admin';
    var latitude=10;
    var longitude=20;
    var url = 'https://www.google.com/maps?q=10,20';
    var message=generateLocationMessage(from,latitude,longitude,)

    expect(200)
    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({
      from,
      url
    })
  })
})
