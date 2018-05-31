import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';


const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x6062D8e4E6332bA267D8B601A918e3935aB84b91'
);

export default instance;
