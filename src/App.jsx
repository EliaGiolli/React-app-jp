import Navbar from './components/navbar'
import WelcomeSection from './components/WelcomeSection'
import MainDescription from './components/MainDescription'
import PopularArticles from './components/PopularArticles'
import CardForm from './components/CardForm'
import OlderArticles from './components/OlderArticles'
import Newsletter from './components/Newsletter'
import LastSection from './components/LastSection'

//img
import Samurai from './assets/img/bushi.jpg';
import Giappone from './assets/img/giappone-moderno.jpg'

//React Hooks
import { useState } from 'react'

//Main App
function App() {
  const addCards =(card)=>{
    setCards([...cardsPopular, card])
  };

  const [cardsPopular, setCards] = useState([
    {
      id: 0,
      isRead:false,
      title: "一番人気の武士は誰でしたか",
      img: Samurai,
      description: "当ブログでは、歴史上最も有名な侍とされる人物に焦点を当てています。彼の名前は宮本武蔵であり、その剣術の技量や哲学的な思想は数世紀にわたり称賛されています。",
    },
    {
      id: 1,
      isRead:true,
      title: "一番人気の武士は誰でしたか",
      img: Samurai,
      description: "当ブログでは、歴史上最も有名な侍とされる人物に焦点を当てています。彼の名前は宮本武蔵であり、その剣術の技量や哲学的な思想は数世紀にわたり称賛されています。",
    },
    {
      id: 2,
      isRead:false,
      title: "一番人気の武士は誰でしたか",
      img: Samurai,
      description: "当ブログでは、歴史上最も有名な侍とされる人物に焦点を当てています。彼の名前は宮本武蔵であり、その剣術の技量や哲学的な思想は数世紀にわたり称賛されています。",
    },
    {
      id: 3,
      isRead:true,
      title: "一番人気の武士は誰でしたか",
      img: Samurai,
      description: "当ブログでは、歴史上最も有名な侍とされる人物に焦点を当てています。彼の名前は宮本武蔵であり、その剣術の技量や哲学的な思想は数世紀にわたり称賛されています。",
    }
  ]);
  const cardsOld =[
    {
      id: 0,
      isRead:true,
      title: "現在の日本についての短い物語",
      img: Giappone,
      topic: "社会・文化",
      description: "日本は、歴史上最も有名な文化を持つ国として、世界中の文化の中心となります。",
    },
    {
      id: 1,
      isRead:false,
      title: "現在の日本についての短い物語",
      img: Giappone,
      topic: "社会・文化",
      description: "日本は、歴史上最も有名な文化を持つ国として、世界中の文化の中心となります。",
    },
    {
      id: 2,
      isRead:false,
      title: "現在の日本についての短い物語",
      img: Giappone,
      topic: "社会・文化",
      description: "日本は、歴史上最も有名な文化を持つ国として、世界中の文化の中心となります。",
    },
    {
      id: 3,
      isRead:true,
      title: "現在の日本についての短い物語",
      img: Giappone,
      topic: "社会・文化",
      description: "日本は、歴史上最も有名な文化を持つ国として、世界中の文化の中心となります。",
    }
  ];
  return (
    <>
    <Navbar />
    <WelcomeSection />
    <MainDescription />
    <h2 className='text-3xl font-bold text-center text-white bg-emerald-600 py-5 my-7'>人気の記事</h2>
    <section className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
      {cardsPopular.map((card) => (
        <PopularArticles 
          key={card.id}
          title={card.title}
          img={card.img}
          isRead={card.isRead}
          description={card.description} />
      ))}
    </section>
    <hr className='bg-slate-500'></hr>
    <CardForm addCards={addCards}/>
    <h2 className='text-3xl font-bold text-center text-white bg-emerald-600 py-5 my-7'>古い記事</h2>
    <section className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4' >
      {cardsOld.map((card) => (
        <OlderArticles
        key={card.id}
        isRead = {card.isRead}
        title={card.title}
        img={card.img}
        topic={card.topic}
        description={card.description}
         />
      ))}
    </section>
    <Newsletter />
    <LastSection />
    </>
  )
}

export default App
