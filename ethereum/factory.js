import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  // "0xc963aC869e4e9F96F099AE67CE013F01f3D193C4"
  "0x5dAD4c23b52a66D04FcC16ad379cDCdA3Fe8462A"
  // '0x55E9880E9974393F8745Afe2D0DD02910219C675'
);

export default instance;
