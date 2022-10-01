var ERC20Token = artifacts.require('./erc20Token.sol');

contract('erc20token', function(accounts) {
  it("should assert true", function(done) {
    let instance = ERC20Token.deployed();
    assert.isTrue(true);
    done();
  });
});
