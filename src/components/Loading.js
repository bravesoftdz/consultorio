import React from 'react'

const Loading = () => {
    return (
        <div className="content" id="content">
            <div class="cube-wrapper">
                    <img src={require('../images/logo.png')} />
                <span class="loading" data-name="Loading">Cargando</span>
            </div>
        </div>
    )
}

export default Loading;