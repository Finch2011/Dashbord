
import { useContext } from 'react'
import { Context } from '../context/NavContext'
import '../style/home.css'
import Navbar from './navbar'
import axios from 'axios'
function Home() {
    const { project, setProject } = useContext(Context)
      const click  = async() =>{
        const res = await axios.post("https://66f535759aa4891f2a2451d7.mockapi.io/project" , {
            titel : "Web Project" ,
            price : 15 ,
            img : "../public/thumb-1920-169164.jpg"
        })
        console.log(res.data)
        setProject(true)
      }
    return (
        <>
            <Navbar />
            <main>
                <div className='main'>
                    <div>
                        <img src="../public/future.jpg" alt="" />

                    </div>
                    <div className='text'>
                        <h1>Finch</h1>
                        <h3>This site is a site for buying projects <br /> and doing them in such a way that after paying an amount to the site, <br />you can get the right to do the project.</h3>
                    <button className='btn-home2'>Get Started</button>
                    </div>
                </div>
                <br />
                <hr />
                <br />
                <div className='project'>
                    <h1>Project</h1>
                    <div className='flex-project'>
                        <div className="item">
                            <img src="../public/thumb-1920-169164.jpg" alt="Item 2" />
                            <div className="item-details">
                                <h3 className='text-h3'>Web Project</h3>
                                <p className='text-h3'>Price: $15.00</p>
                            </div>
                            <button onClick={click} className='btn-home'>Buy</button>
                        </div>
                        <div className="item">
                            <img src="../public/thumb-1920-169164.jpg" alt="Item 2" />
                            <div className="item-details">
                                <h3 className='text-h3'>Web Project</h3>
                                <p className='text-h3'>Price: $15.00</p>
                            </div>
                            <button onClick={click} className='btn-home'>Buy</button>
                        </div>
                        <div className="item">
                            <img src="../public/thumb-1920-169164.jpg" alt="Item 2" />
                            <div className="item-details">
                                <h3 className='text-h3'>Web Project</h3>
                                <p className='text-h3'>Price: $15.00</p>
                            </div>
                            <button onClick={click} className='btn-home'>Buy</button>
                        </div>
                    </div>
                </div>

            </main>

            <footer>
                <h1>Finch</h1>
                <p>Lorem, ipsum dolor sit amet consectetur <br />adipisicing elit. Eveniet dolorum suscipit iure voluptatum <br />unde praesentium, fugit quaerat maxime voluptas aut <br /> doloremque laudantium quasi deserunt ad? Ipsum <br />laborum sunt corporis? Impedit?</p>
                <p>&copy; 2023 Your Company</p>
            </footer>
        </>
    )
}
export default Home