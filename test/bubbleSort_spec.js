const Chai = require('chai');
const expect = Chai.expect;
const bubbleSortModule = require('../bubbleSort.js');
const bubbleSort = bubbleSortModule;

describe('bubbleSort module', () => {
  it('Should be function', () => {
    expect(bubbleSort).to.exist;
    expect(bubbleSort).to.be.a('function');
  });
  it('Should return an array', () =>{
    expect(bubbleSort([4,2,6,5])).to.deep.equal([2,4,5,6]);
    expect(bubbleSort([5,1,4,2,8])).to.deep.equal([1,2,4,5,8]);
    expect(bubbleSort([8,5,10,1,3,12])).to.deep.equal([1,3,5,8,10,12]);
    expect(bubbleSort([12,32,156,23,153,2,1,5,23,-1,0,2])).to.deep.equal([-1,0,1,2,2,5,12,23,23,32,153,156]);
  });
});


