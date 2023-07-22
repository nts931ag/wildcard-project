// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract WileCard is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    uint256 public deposits = 0;
    uint256 amount = 0;
    address payable public Owner;
    uint256 fee = 8;

    mapping(address => uint256[]) public userOwnedTokens;
    

    constructor() ERC721("WileCard", "Wile") {
        Owner = payable(msg.sender);
    }

    function mintNFT(string memory tokenURI) public returns (uint256) {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _safeMint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        userOwnedTokens[msg.sender].push(newItemId);
        return newItemId;
    }
    
    function transferNFT(address from, address to, uint256 tokenId) public {
        require(_isApprovedOrOwner(_msgSender(), tokenId), "ERC721: transfer caller is not owner nor approved");
        userOwnedTokens[to] = userOwnedTokens[from];
        delete userOwnedTokens[from];
        _transfer(from, to, tokenId);
    }

    function getUserToken() public view returns (uint256[] memory) {
        return userOwnedTokens[msg.sender];
    }

    function totalSupply() public view returns (Counters.Counter memory) {
        return _tokenIds;
    }

    modifier onlyOwner() {
        require(msg.sender == Owner, "Not owner");
        _;
    }

    function deposit() public payable returns (uint256) {
        require(msg.value == 1 * (10**fee), "MONEY U KONW");
        return msg.value;
    }

    function changeFee(uint256 _fee) public returns (uint256) {
        fee = _fee;
        return fee;
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function withdraw(uint256 _amount) public onlyOwner {
        Owner.transfer(_amount);
    }
}