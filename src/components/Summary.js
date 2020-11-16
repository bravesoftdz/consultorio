import React, { Fragment } from 'react'
import Presentation from './Presentation'
import { withRouter } from 'react-router-dom'

const Summary = ({ title,image, cssFz, subTitle, presentation, company, health, consultory, trainings, cssContact }) => {

    return (
        <Fragment>
            <div className=""
                style={{
                    height: "9vh",
                    position: "relative",
                    top: "0px",
                    background: "#fff",
                    width: "100%"
                }}
            ></div>
            <section className="Services Background__Services" style={{
                background: "#fff",
            }}>
                {presentation && <Presentation title={title} cssFz={cssFz} image={image} />}
            </section>
        </Fragment>
    );
}

export default withRouter(Summary);