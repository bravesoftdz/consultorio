import React, { Fragment, useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Summary from '../components/Summary'
import pdf1 from '../pdf/capacitaciones(covid).pdf'
import pdf2 from '../pdf/capacitaciones(seguridad y salud).pdf'

const trainings = [
    {
        "_id": "0",
        "text": "Temas en seguridad y salud en el trabajo",
        "pdf": pdf1
    },
    {
        "_id": "1",
        "text": "Temas de capacitación de seguridad y salud en el trabajo (Covid)",
        "pdf": pdf2
    },
]

const Trainings = () => {

    const [presentation, setPresentation] = useState(true)
    useEffect(() => {
        setPresentation(true)
    },[])

    return ( 
        <Fragment>
            <Header />
            <Summary presentation = {presentation} title="capacitaciones" trainings={trainings} />
            <Footer />
        </Fragment>
     );
}
 
export default Trainings;