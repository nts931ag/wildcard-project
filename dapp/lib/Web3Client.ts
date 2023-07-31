import { BigNumber, ethers } from "ethers";
import data from "../../artifacts/contracts/Card.sol/WileCard.json"; // get data abi
import addressData from "../../deploy.json";

const conTractAddress = addressData.address; // * nft contractaddress
// * abi of nft address
// const abi = "[ { \"inputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"constructor\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": true, \"internalType\": \"address\", \"name\": \"owner\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"approved\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"uint256\", \"name\": \"tokenId\", \"type\": \"uint256\" } ], \"name\": \"Approval\", \"type\": \"event\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": true, \"internalType\": \"address\", \"name\": \"owner\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"operator\", \"type\": \"address\" }, { \"indexed\": false, \"internalType\": \"bool\", \"name\": \"approved\", \"type\": \"bool\" } ], \"name\": \"ApprovalForAll\", \"type\": \"event\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"to\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"tokenId\", \"type\": \"uint256\" } ], \"name\": \"approve\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"uint256\", \"name\": \"_fee\", \"type\": \"uint256\" } ], \"name\": \"changeFee\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"deposit\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"payable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"string\", \"name\": \"tokenURI\", \"type\": \"string\" } ], \"name\": \"mintNFT\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"from\", \"type\": \"address\" }, { \"internalType\": \"address\", \"name\": \"to\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"tokenId\", \"type\": \"uint256\" } ], \"name\": \"safeTransferFrom\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"from\", \"type\": \"address\" }, { \"internalType\": \"address\", \"name\": \"to\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"tokenId\", \"type\": \"uint256\" }, { \"internalType\": \"bytes\", \"name\": \"_data\", \"type\": \"bytes\" } ], \"name\": \"safeTransferFrom\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"operator\", \"type\": \"address\" }, { \"internalType\": \"bool\", \"name\": \"approved\", \"type\": \"bool\" } ], \"name\": \"setApprovalForAll\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": true, \"internalType\": \"address\", \"name\": \"from\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"to\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"uint256\", \"name\": \"tokenId\", \"type\": \"uint256\" } ], \"name\": \"Transfer\", \"type\": \"event\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"from\", \"type\": \"address\" }, { \"internalType\": \"address\", \"name\": \"to\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"tokenId\", \"type\": \"uint256\" } ], \"name\": \"transferFrom\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"from\", \"type\": \"address\" }, { \"internalType\": \"address\", \"name\": \"to\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"tokenId\", \"type\": \"uint256\" } ], \"name\": \"transferNFT\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"uint256\", \"name\": \"_amount\", \"type\": \"uint256\" } ], \"name\": \"withdraw\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"owner\", \"type\": \"address\" } ], \"name\": \"balanceOf\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"deposits\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"uint256\", \"name\": \"tokenId\", \"type\": \"uint256\" } ], \"name\": \"getApproved\", \"outputs\": [ { \"internalType\": \"address\", \"name\": \"\", \"type\": \"address\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"getBalance\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"getUserToken\", \"outputs\": [ { \"internalType\": \"uint256[]\", \"name\": \"\", \"type\": \"uint256[]\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"sender\", \"type\": \"address\" } ], \"name\": \"getUserTokenWithAddress\", \"outputs\": [ { \"internalType\": \"uint256[]\", \"name\": \"\", \"type\": \"uint256[]\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"owner\", \"type\": \"address\" }, { \"internalType\": \"address\", \"name\": \"operator\", \"type\": \"address\" } ], \"name\": \"isApprovedForAll\", \"outputs\": [ { \"internalType\": \"bool\", \"name\": \"\", \"type\": \"bool\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"name\", \"outputs\": [ { \"internalType\": \"string\", \"name\": \"\", \"type\": \"string\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"Owner\", \"outputs\": [ { \"internalType\": \"address payable\", \"name\": \"\", \"type\": \"address\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"uint256\", \"name\": \"tokenId\", \"type\": \"uint256\" } ], \"name\": \"ownerOf\", \"outputs\": [ { \"internalType\": \"address\", \"name\": \"\", \"type\": \"address\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"bytes4\", \"name\": \"interfaceId\", \"type\": \"bytes4\" } ], \"name\": \"supportsInterface\", \"outputs\": [ { \"internalType\": \"bool\", \"name\": \"\", \"type\": \"bool\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"symbol\", \"outputs\": [ { \"internalType\": \"string\", \"name\": \"\", \"type\": \"string\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"uint256\", \"name\": \"tokenId\", \"type\": \"uint256\" } ], \"name\": \"tokenURI\", \"outputs\": [ { \"internalType\": \"string\", \"name\": \"\", \"type\": \"string\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"totalSupply\", \"outputs\": [ { \"components\": [ { \"internalType\": \"uint256\", \"name\": \"_value\", \"type\": \"uint256\" } ], \"internalType\": \"struct Counters.Counter\", \"name\": \"\", \"type\": \"tuple\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"name\": \"userOwnedTokens\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" } ]";
const abi = data.abi;

// let myAddress = "";
let contract: ethers.Contract;
let provider: ethers.providers.Web3Provider;

/**
 * * for init web3 metamasek
 * @returns true
 */
export const init = async () => {
  //@ts-ignore
  provider = new ethers.providers.Web3Provider(web3.currentProvider, "any");
  provider.on("network", (oldNetwork) => {
    console.log("oldNetwork");
    console.log(oldNetwork.chainId);
    if (oldNetwork.chainId != 97) {
      alert("change to BNB testnet pls");
      return false;
    }
  });
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  console.log(signer);
  contract = new ethers.Contract(conTractAddress, abi, signer);
  console.log("init");
  console.log(contract);
  return true;
};

export const mint = async (data: string) => {
  console.log(contract);
  contract.mintNFT([data]).then(function (transaction: any) {
    return transaction;
  });
  return;
};

/**
 * * func get my nft in smart contract
 * @returns my NFTs
 */
export const getUserToken = () => {
  // contract.tokenURI
  return new Promise(function (res, rej) {
    contract.getUserToken().then(async function (transaction: any) {
      let data = await transaction.filter(
        (data: any) => data.toNumber() != 0 && data.toNumber()
      );
      data = await data.map((data: any) => data.toNumber());
      // ? promise to get tokeURI from array token id like [1,2,3]
      const promises = await data.map(async (data: unknown) => {
        const url = new Promise((resolve, reject) => {
          resolve(contract.tokenURI(data));
        });
        return url;
      });
      const urls = await Promise.all(promises);
      const dataIds = urls.map(async (req: any, index: number) => {
        const url = new Promise(async (resolve, reject) => {
          const dataFect: any = await fetch(req);
          let urlMerge = await dataFect.json();
          urlMerge["tokenId"] = data[index];
          resolve(urlMerge);
        });
        return url;
      });
      console.log("dataIds : " + (await dataIds));
      const numFruits = await Promise.all(dataIds);
      res(await numFruits);
    });
  });
};

export const getUserTokenViaAddress = (contract: any) => {
  // contract.tokenURI
  return new Promise(function (res, rej) {
    contract
      .getUserTokenWithAddress("0xF58F1e730fd6bDd0c239E1D83eaB9d87132eF723")
      .then(async function (transaction: any) {
        let data = await transaction.filter(
          (data: any) => data.toNumber() != 0 && data.toNumber()
        );
        data = await data.map((data: any) => data.toNumber());
        // ? promise to get tokeURI from array token id like [1,2,3]
        const promises = await data.map(async (data: unknown) => {
          const numFruit = new Promise((resolve, reject) => {
            resolve(contract.tokenURI(data));
          });
          return numFruit;
        });
        const numFruits = await Promise.all(promises);
        res(await numFruits);
      });
  });
};

/**
 * * isAuth is middleware to chekc auth web3 or metamask connected or not
 * @returns string my address
 */
export const isAuth = async () => {
  let address = "";
  const signer = provider?.getSigner();
  address = await signer?.getAddress();
  return address;
};

/**
 * * random card nft
 * @returns
 */
export const randomNFT = async () => {
  console.log("randomNFT");
  try {
    contract
      .randomNFT()
      .then(async function (transaction: any) {
        console.log(transaction);
      })
      .catch((_error: any) => {
        console.log("out of nft in collection");
      });
  } catch (error) {
    console.log("out of nft");
  }
};

export const getUriFromTokenId = async (id: number) => {
  //return Promise
  return new Promise(function (res, rej) {
    contract.tokenURI(id).then(async function (transaction: any) {
      res(await transaction);
    });
  });
};


export const getHistoryTrasaction = () => {
  let etherscanProvider = new ethers.providers.EtherscanProvider('ropsten');
  etherscanProvider.getHistory('0x849131560a7a178f9d04cad2d681a55c51283fc3').then((history) => {
    history.forEach((tx) => {
        console.log(tx);
    })
});
}