import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';


const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x87e303a70Bc73124849DE93712a050c29fa74C29'
);

export default instance;
