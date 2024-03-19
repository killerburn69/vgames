import { InfoPageLayout } from 'views/MyInventory'
import Overview from 'views/MyInventory/Overview'

const InfoPage = () => {
  return <Overview />
}

InfoPage.Layout = InfoPageLayout
InfoPage.chains = [] // set all

export default InfoPage