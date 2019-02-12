const expect = require('expect');

var {generateMessage}=require('./message');
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
