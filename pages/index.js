import React from 'react'
import CONST from '../constants/index'
import Sidebar from '../components/col-sidebar'
import Main from '../components/col-main'
import Extra from '../components/col-extra'
import useWindowSize from '../hooks/useWindowSize'
import Layout from '../components/layout'

function HomePage() {
  const size = useWindowSize()

  return (
    <Layout>
      <Sidebar flat={size.width < CONST.DESKTOP_SIZE }>asdas</Sidebar>
      <Main>{JSON.stringify(size)}</Main>
      {/* sizedan gelen witdh değerimiz constant klasorümüzden gelen sabitlerimizden tablet için olanından (980) büyükse extrayı göster değilse gösterme */}
      {size.width > CONST.TABLET_SIZE && <Extra>Extra</Extra>}
    </Layout>
  )
}

export default HomePage
