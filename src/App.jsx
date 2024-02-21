import Navbar from './components/navbar'
import WelcomeSection from './components/WelcomeSection'
import MainDescription from './components/MainDescription'
import PopularArticles from './components/PopularArticles'
import OlderArticles from './components/OlderArticles'
import Newsletter from './components/Newsletter'
import LastSection from './components/LastSection'

//img
import Samurai from './assets/img/bushi.jpg';
import Giappone from './assets/img/giappone-moderno.jpg'

function App() {

  return (
    <>
    <Navbar />
    <WelcomeSection />
    <MainDescription />
    <h2 className='text-3xl font-bold text-center text-white bg-emerald-600 py-5 my-7'>人気の記事</h2>
    <section className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
      <PopularArticles 
        title= "一番人気の武士は誰でしたか"
        img={Samurai}
        description="当ブログでは、歴史上最も有名な侍とされる人物に焦点を当てています。
          彼の名前は宮本武蔵であり、その剣術の技量や哲学的な思想は数世紀にわたり称賛されています。
          彼の生涯と功績について掘り下げ、彼が日本の歴史においてどのような影響を与えたかを探求しています。" />
      <PopularArticles 
        title= "2番目の人気の武士は誰でしたか"
        img={Samurai}
        description="ここに2番目の人気の武士の説明を入力してください。" />
      <PopularArticles 
        title= "3番目の人気の武士は誰でしたか"
        img={Samurai}
        description="ここに3番目の人気の武士の説明を入力してください。" />
      <PopularArticles 
        title= "4番目の人気の武士は誰でしたか"
        img={Samurai}
        description="ここに4番目の人気の武士の説明を入力してください。" />
    </section>
    <h2 className='text-3xl font-bold text-center text-white bg-emerald-600 py-5 my-7'>古い記事</h2>
    <section className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4' >
      <OlderArticles
        title="現在の日本についての短い物語"
        img={Giappone}
        topic="社会・文化"
        description="insert description"
         />
      <OlderArticles
        title="現在の日本についての短い物語"
        img={Giappone}
        topic="社会・文化"
        description="insert description"
         />
      <OlderArticles
        title="現在の日本についての短い物語"
        img={Giappone}
        topic="社会・文化"
        description="insert description"
         />
      <OlderArticles
        title="現在の日本についての短い物語"
        img={Giappone}
        topic="社会・文化"
        description="insert description"
         />
    </section>
    <Newsletter />
    <LastSection />
    </>
  )
}

export default App
