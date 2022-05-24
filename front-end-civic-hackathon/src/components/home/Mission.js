// import Mission from "./Mission"
import { Box, RoutedButton as GrommetRoutedButton, Text } from 'grommet';
 
function Mission(){

    
    return(
        <div>
            <h1 class="mission-heading">Welcome to NexusEdu</h1>
            <div class="mission-section">
            <h3>Our Misson</h3>
            <p class="mission-text">
            Inform the youth of underprivileged areas of free educational opportunities by providing a platform that allows people to share free educational alternatives to college.
            </p>
            <img src="http://indigoyogadayton.com/wp-content/uploads/2013/10/gratitude.jpg" width="40%"class="rounded mx-auto d-block" alt="..."></img>
            <br />
            <GrommetRoutedButton label="Sign Up" path="/loginSignUp" />
            </div>
        </div>
    )
}


 
export default Mission 