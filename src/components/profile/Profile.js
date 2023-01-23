import Header from "./Header";
import User from "./User"; 
import CommandCentre from "./Сommand-Сentre";

function Profile(){
    return(
        <div className='form'>
            <Header/>
            <User/>
            <CommandCentre/>
        </div>
    )
}
export default  Profile;