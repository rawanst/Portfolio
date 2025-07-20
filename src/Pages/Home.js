import FrontPage from '../Component/FrontPage'
import HomeSection from '../Component/HomeSection'

const Home = () => {

  window.scrollTo(0, 0)
  
  const data = {
    frontData: {
      title:'Rawan Tabaja',
      titleDeux:'Développeuse Full-Stack',
      content:'Passionné par la tech, je transforme les défis en solutions innovantes. Découvrez mon parcours et mes réalisations.',
    },
    links: [
      {
        id: 1,
        name: 'LinkedIn',
        shortName: 'LN',
        url: 'https://www.linkedin.com/in/rawan-t-5ba1bb170/'
      },
      {
        id: 2,
        name: 'GitHub',
        shortName: 'GH',
        url: 'https://github.com/rawanst'
      },
      {
        id: 3,
        name: 'rawantabaja12@gmail.com',
        shortName: '@',
        url: 'mailto:rawantabaja12@gmail.com?cc=&subject=Hello world !&body=Bonjour Rawan,'
      },
    ],
    homeSections: [
      {
        title:'À Propos',
        routh:'/',
        desc:"Développeuse web full-stack diplômée d’un Master en développement informatique, je suis passionnée par la conception de solutions innovantes. Mon expertise en React.js pour le front-end, et en C# .NET pour le back-end, me permet d’aborder des projets complexes avec efficacité. Dotée d’une forte capacité d’adaptation, je cherche à intégrer une équipe dynamique où je pourrai contribuer à des projets ambitieux tout en continuant à développer mes compétences techniques.",
        listOfList:[
          { 
            id: 1, 
            name: 'Programmation', 
            list: [
              {id: '11', name: 'React'}, 
              {id: '12', name:'C# .Net'}
            ] 
          },
          { 
            id: 2, 
            name: 'Base de données', 
            list: [{id:'21', name:'MSSMSQL'}] },
          { 
            id: 4, 
            name: 'Langue', 
            list: [
              {id:'41', name:'Français Native'}, 
              {id:'42', name:'Anglais TOEIC B2'}] 
          },
          { 
            id: 3, 
            name: 'Outils', 
            list: [
              {id:'31', name:'GitHub'}, 
              {id:'32', name:'Fork'}, 
              {id:'33', name:'Postman'}
            ]
          },
        ],
        isCV:true,
      },
      {
        title:'Projets',
        routh:'/projects',
        summaries:[
          { 
            id: 1, 
            routh: '/projects', 
            title: 'Projet 1', 
            resume: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
          },
          { 
            id: 2, 
            routh: '/projects', 
            title: 'Projet 2', 
            resume: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
          },
          { 
            id: 3, 
            routh: '/projects', 
            title: 'Projet 3', 
            resume: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '

          },
        ],
      },
      {
        title:'Blog',
        routh:'/blog',
        summaries:[
          { 
            id: 1, 
            routh: '/blog', 
            title: 'React server composant', 
            resume: "Réinventez vos applications web avec les composants serveur React : performance, rapidité et efficacité au cœur de Next.js !"
          },
          { 
            id: 2, 
            routh: '/blog', 
            title: 'Advent of code', 
            resume: "Plongez dans l’Advent of Code, le défi ultime des développeurs pour allier logique, algorithmes et esprit de Noël !"
          },
        ],
      }
    ]
  }

  return(
    <>
      <FrontPage
        height='90vh'
        title={data.frontData.title}
        titleDeux={data.frontData.titleDeux}
        content={data.frontData.content}
        isHomePage={1}
        links={data.links}
      />
      {data.homeSections.map((item, id) => (
        <HomeSection
          key={id}
          id={id}
          title={item.title}
          routh={item.routh}
          desc={item.desc ? item.desc : null}
          listOfList={item.listOfList ? item.listOfList : null}
          isCV={item.isCV ? true : false}
          summaries={item.summaries ? item.summaries : null}
        />
      ))}
    </>
  )
}

export default Home