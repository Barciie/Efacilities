import Account from './Account';
import {BrowserRouter as Router,Route,Switch,BrowserRouter} from 'react-router-dom'
import {IonButton} from "@ionic/react"
import Profile from './profile';
import Display from '../Sidebar/Display'

const settings = ( ) => {
    return (
        <diV className ="settings">
            <ul><IonButton routerLink='./profile'>Account</IonButton></ul>
            <ul><IonButton>Notifications</IonButton></ul>
            <ul><IonButton routerLink='./Display'></IonButton></ul>
            <ul><IonButton>Privacy and Safety</IonButton></ul>
           
            

        </diV>
        
    )

    
}

export default settings;