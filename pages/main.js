import React from 'react'

import Layout from '../components/layout/layout'
import Tweet from '../components/tweet/tweet'

function HomePage() {
  return (
    <Layout>
      <Tweet
        name="Ali KAYA"
        slug="alikaya"
        datetime={new Date('2020-08-02')}
        text={`  Merhaba Ali Bey 
      
             nasılsınız

      `}
      ></Tweet>
          <Tweet
        name="Ali KAYA"
        slug="alikaya"
        datetime={new Date('2020-08-02')}
        text={`  Bu taraflara ne zaman geliyorsunuz özlettiniz kendinizi

      `}
      ></Tweet>
    </Layout>
  )
}

export default HomePage
