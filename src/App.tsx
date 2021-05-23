import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Contents from './components/Contents'
import data from './utils/data'

const App: React.FC = () => {
  return(
    <>
      <Header header={data.header} />
      {data.contents.map((contents, i) =>
        <Contents contents={contents} key={i}/>
      )}
      <Footer footer={data.footer} />
    </>
  )
}

export default App