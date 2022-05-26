// import Mission from "./Mission"
import { Box, RoutedButton as GrommetRoutedButton, Text } from 'grommet';
import "./home.css"

function Mission(){

    
    return(
        <section className='flex-container'>
            <section className='banner'>
                <h1 className='home-title'>Nexus Edu </h1>
            <img src='https://lifereinvented.com/wp-content/uploads/2019/08/blog-4-1024x714.jpg'/>
            </section>

            <section className='flex-box'>
                <section className='flex-box1'>
                    <section>
                        <img className='home-image' src='https://cdn-icons-png.flaticon.com/512/3867/3867730.png'/>
                    </section>
                    <section className=''>
                        <h2>Network</h2>
                        <p> Build the network you need to jumpstart your career without a college degree.</p>
                    </section>
                </section>

                 <section className='flex-box2'>
                <section>
                    <h2>Career Building</h2>
                    <p>Explore possible careers that can help you become financially stable.</p>
                </section>
                <section>
                    <img className='home-image' src='https://cdn-icons-png.flaticon.com/512/3867/3867730.png'/>
                </section>
                 </section>
            </section>
            <section className='flex-box3'>
                    <section>
                        <img className='home-image' src='https://cdn-icons-png.flaticon.com/512/3867/3867730.png'/>
                    </section>
                    <section className=''>
                        <h2>Hospitable Community</h2>
                        <p>Find your professional niche to learn and grow.</p>
                    </section>
                </section>
            {/* <GrommetRoutedButton label="Sign Up" path="/loginSignUp" /> */}
        </section>
        
    )
}


 
export default Mission 