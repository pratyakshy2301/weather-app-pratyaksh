import React from 'react'

export default function Navbar(props) {

    return (
        <><div className='navbar'>

        <div className='navbar1'>
            <h2><i>PRATYAKSH's WEATHER APPLICATION</i></h2>
            <h2>CSI ID - CT-CSI23/RJ0643</h2>
        </div>
        
        <div className={`form-check form-switch text-${props.mode==='dark'?'white':'grey'}`}>
            <h3><input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Click here to dark the theme of page</label></h3>
        </div>
        </div>
        </>
    );
}