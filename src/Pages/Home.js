import FrontPage from '../Component/FrontPage'
import HomeSection from '../Component/HomeSection'
import data from '../data.js'

const Home = () => {
  
  window.scrollTo(0, 0)

  return(
    <>
      <FrontPage
        title={data.frontData.title}
        titleDeux={data.frontData.titleDeux}
        content={data.frontData.content}
        isHomePage={1}
        links={data.links}
      />
      <HomeSection
        title={data.aPropos.title}
        routh={data.aPropos.routh}
        desc={data.aPropos.desc }
        listOfList={data.aPropos.listOfList}
        isCV={data.aPropos.isCV}
      />
      <HomeSection
        title={data.projets.title}
        routh={data.projets.routh}
        summaries={data.projets.summaries}
      />
      <HomeSection
        title={data.blog.title}
        routh={data.blog.routh}
        summaries={data.blog.summaries}
      />
    </>
  )
}

export default Home