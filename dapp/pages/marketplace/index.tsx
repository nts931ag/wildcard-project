import Layout from "@/components/Layout";
import Link from "next/link";
import { randomNFT, getSellNftList, init } from "@/lib/Web3Client";
import { useEffect, useState } from "react";

const Marketplace = () => {
  const [nftData, setNFTData] = useState([]);

  useEffect(() => {
    getUnSoleList();
  }, []);

  const getUnSoleList = () => {
    init().then((res) => {
      getSellNftList().then((data: any) => {
        let rawData: any = [];
        for (let i = 0; i < data.length; i++) {
          const element = data[i];

          let item = {};
          item = {
            ...item,
            data: element.data,
            price: element.price,
          };
          rawData.push(item);
          console.log(element.data);
        }
        setNFTData(rawData);

        // console.log(nft[0].tokenId)
        // nft.map((data: any) => console.log(data));
      });
    });
  };

  return (
    <Layout>
      <div className="grid grid-cols-4 gap-4">
        <div className="...">
          <h2 className="text-2xl mb-3">Management</h2>
          <button
            onClick={() => randomNFT()}
            className="text-center w-full py-2 border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white duration-150 rounded-md mb-2"
          >
            Random Card
          </button>
          <Link href="/marketplace/my">
            <a className="text-center w-full py-2 bg-blue-400 rounded-md block">
              My Card
            </a>
          </Link>
          <h2 className="text-2xl mt-3">Rarity</h2>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
            <label
              className="form-check-label inline-block "
              htmlFor="inlineCheckbox1"
            >
              S
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              id="inlineCheckbox2"
              value="option2"
            />
            <label
              className="form-check-label inline-block "
              htmlFor="inlineCheckbox2"
            >
              A
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input   h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 
                focus:outline-none duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              id="inlineCheckbox2"
              value="option2"
            />
            <label
              className="form-check-label inline-block "
              htmlFor="inlineCheckbox2"
            >
              B
            </label>
          </div>
          <div className="relative pt-1">
            <label htmlFor="customRange" className="form-label ">
              Price <br />{" "}
            </label>
            <input
              type="range"
              className="form-range w-65% h-1 focus:outline-none focus:ring-1 focus:shadow-none"
              min="0"
              max="500"
              step="0.5"
              defaultValue={0}
              id="customRange"
            />
            <div></div>

            <div className="relative pt-1">
              <label className="form-label  ">
                Mana <br />{" "}
              </label>
              <input
                type="range"
                className="
                    form-range
                    w-65%
                    h-1
                    value
                    focus:outline-none focus:ring-1 focus:shadow-none
    "
                min="0"
                max="500"
                step="0.5"
                defaultValue={0}
              />
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <h2 className="text-2xl mb-3">Cards</h2>
          <div className="grid grid-cols-4 gap-4">
            {nftData.map((itemData: any, i: any) => {
              // const item = await fetch(data.tokenURI)
              // return data.toString();
              return (
                <div
                  key={i}
                  className="bg-white overflow-hidden rounded-md text-gray-900"
                >
                  <img src={itemData.data.image} alt="" />
                  <div className="my-2 p-2">
                    <h3>
                      {itemData.data.name} #{itemData.data.id}
                    </h3>
                    <p className="text-smm text-gray-600">
                      {itemData.price / 10 ** 8} BNB
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Marketplace;
