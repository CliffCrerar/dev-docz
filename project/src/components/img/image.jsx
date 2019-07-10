import React from 'react'

function Image ( props ) {
    const containerStyle = {

    }
    var height = props.height === undefined ? 'auto' : props.height;
    return (
        <div style={containerStyle} className="img-container">
            <style>{`
                .img-container {
                    height: ${height};    
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding:${props.padding}
                }
                .img-temp{
                    height: 100%;
                    width: auto;
                }
                
            `}</style>
            <img className="img-temp" src={props.src} alt="docz-rocket-svg" />
        </div>
    )
}

export default Image;