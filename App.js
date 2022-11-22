import React from "react"
import Contact from "./Contact"


/* Challenge:

- Create a Contact.js component in another file
- Move one of the contact card divs below into that file
- import and render 4 instances of that contact card
    - Think ahead: what's the problem with doing it this way?
*/

function App() {
    return (
        <div className="contacts">
            <Contact
                img="./images/mr-whiskerson.png"
                name="Mr. Whiskerson"
                // contactIcon="./images/phone-icon.png"
                contact="(212) 555-1234"
                // emailIcon="./images/mail-icon.png"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact
                img="./images/fluffykins.png"
                name="Fluffykins"
                // contactIcon="./images/phone-icon.png"
                contact="(212) 555-2345"
                // emailIcon="./images/mail-icon.png"
                email="fluff@me.com"
            />
            <Contact
                img="./images/felix.png"
                name="Felix"
                // contactIcon="./images/phone-icon.png"
                contact="(212) 555-4567"
                // emailIcon="./images/mail-icon.png"
                email="thecat@hotmail.com"
            />
            <Contact
                img="./images/pumpkin.png"
                name="Pumpkin"
                // contactIcon="./images/phone-icon.png"
                contact="(0800) CAT KING"
                // emailIcon="./images/mail-icon.png"
                email="pumpkin@scrimba.com"

            />

            
        </div>

    )
}

export default App