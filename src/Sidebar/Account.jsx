import {BrowserRouter as Router,Route,Switch,BrowserRouter} from 'react-router-dom'
import Profile from './profile'

const Account = ( ) => {
    return(
        <div className="Account">
        <Route path = "./profile" exact={true} component={Profile} />
        </div>
    )
}

export default Account;