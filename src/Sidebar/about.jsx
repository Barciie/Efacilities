import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import AppTabs from "../AppTabs";

const About = () => {
    return (

        <IonPage className='about_us'>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>About Us</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="box">
            <h3><b>E-facilities</b></h3>
            
            <p>
                We are the chain of delivery between our service providers and ther respective clients resulting successful dervice delivery to our
                customers. Our app  called eFacilities  promote the channels that fight unemployment and brings various opportunities to all
                our communities.

                We took the the liberty to create an app whereby we have service provider and client user communication paths to interact together based on
                the services needed by the client user and the services rendered by our service providers. We have various services offered by our service
                providers which are categorized based on their service title that they offer to our client users.

                Our service providers and client users need an account to have an unlimited access to our custegorized services and to also create their
                profiles. Each category consists of posts and advertising of the services that our service providers offers at various locations in
                our communities.

                We aim to connect client user to their respective service providers for both of their needs to be met, with just a click button on the app.
                Our platform renders as a bridge between the two parties offering a more secured and efficient connection through our eFacilities app.
                
                <h3><i>"Handing over our services successfully"</i></h3>
            </p>
            <i>
                <b>E-Successor Team</b>

            </i>
            <br /><br /><br />
            </IonContent>

            <AppTabs />
        </IonPage>
  

    )
}

export default About;