import React from 'react';
import ReactDOM from 'react-dom';
import designation ,{job , company} from './App';
// or import * as anything from './App';

ReactDOM.render(
    <>
        <ol>
            <li>Pranaya</li>
            <li>{designation}</li>
            <li>{job}</li>
            <li>{company()}</li>
             
            {  // or
                /* <li>Pranaya</li>
            <li>{anything.default}</li>
            <li>{anything.job}</li>
            <li>{anything.company()}</li> */}
        </ol>
    </>, document.getElementById('root')
)