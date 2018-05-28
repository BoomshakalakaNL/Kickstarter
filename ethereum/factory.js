import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';


const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xF5F9daedb706aD862e940925973bB7A185d23165'
);

export default instance;
