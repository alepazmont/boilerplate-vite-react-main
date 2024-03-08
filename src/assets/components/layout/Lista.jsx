/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";  function Lista(props) {      const data = props.data;      let html = ' ';      data.forEach(element => {                  html += <li>${element}</li>;      });       return (     <div>         <ul>             {html}         </ul>     </div>     ) }  export default Lista;
import React from "react";

function Lista(props) {

    const data = props.data;

    let html = ' ';

    data.forEach(element => {

        html += <li>${element}</li>;

    });


    return (
    <div>
        <ul>
            {html}
        </ul>
    </div>
    )
}

export default Lista;