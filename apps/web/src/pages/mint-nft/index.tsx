import { InfoPageLayout } from 'views/Mint'
import Overview from 'views/Mint/Overview'

const InfoPage = () => {
  return <Overview />
}

InfoPage.Layout = InfoPageLayout
InfoPage.chains = [] // set all

export default InfoPage