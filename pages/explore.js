import React,{useEffect, useContext} from 'react'
import ExploreSearch from '../components/explore-search/explore-search'
import Layout from '../components/layout/layout'
import Tweet from '../components/tweet/tweet'
import StoreContext from '../store'

function ExplorePage() {

  const store = useContext(StoreContext)
  const tweets2 = store.tweets
  const tweett = store.value

  useEffect(() => {
    store.GetAllTweets(store.UpdateTweets)
  
   
  }, [])


  return (
    <Layout>
      <ExploreSearch></ExploreSearch>
      {tweett !== 0 ? (
        <>
          {tweett.map((tweet,index) => {
            
          return (<Tweet
          key={index}
            name={
              tweet[1].charAt(0).toUpperCase() +
              tweet[1].slice(1).toLowerCase()
            }
            slug={tweet[1]}
            datetime={new Date(tweet[2])}
            text={tweet[0]}
          ></Tweet>)
          })}
        </>
      ) :(
        tweets2 !== null ?
        (
          <>
            {tweets2.map((tweet,index) => {
              
              return (<Tweet
              key={index}
                name={
                  tweet[1].charAt(0).toUpperCase() +
                  tweet[1].slice(1).toLowerCase()
                }
                slug={tweet[1]}
                datetime={new Date(tweet[2])}
                text={tweet[0]}
              ></Tweet>)
              })}
          </>
        )
        : <>
        </>
      ) }
    </Layout>
  )
}

export default ExplorePage
