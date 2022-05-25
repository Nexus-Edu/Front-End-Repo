// import Mission from "./Mission"
import { Box, RoutedButton as GrommetRoutedButton, Text } from 'grommet';
 import "./home.css"
function Mission(){

    
    return(
        <section className='flex-container'>
            <section className='banner'>
                <h1>Nexus Edu </h1>
            <img src='https://lifereinvented.com/wp-content/uploads/2019/08/blog-4-1024x714.jpg'/>
            </section>

            <sction className='flex-box'>
                <section className='flex-box1'>
                    <section>
                        <img className='home-image' src='https://cdn-icons-png.flaticon.com/512/3867/3867730.png'/>
                    </section>
                    <section className=''>
                        <h2>sub heading</h2>
                        <p>body</p>
                    </section>
                </section>

                 <section className='flex-box2'>
                <section>
                    <h2>sub heading2</h2>
                    <p>body2</p>
                </section>
                <section>
                    <img className='home-image' src='https://cdn-icons-png.flaticon.com/512/3867/3867730.png'/>
                </section>
                 </section>
            </sction>
            <GrommetRoutedButton label="Sign Up" path="/loginSignUp" />
        </section>
        
    )
}


 
export default Mission 