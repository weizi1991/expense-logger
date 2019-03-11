import React from 'react';
import ReactDom from 'react-dom';

const Info = (props) => (
    <div>
        <h1>infor</h1>
        <p>this is info : {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info. please don't share</p>}
            <p>this is private info.</p>
            <WrappedComponent {...props}/>
        </div>
    )
}
//requireAuthentication
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? 
            <WrappedComponent {...props}/> 
            : <p>Please log in to view info</p>
            }
        </div>
    )
}
const requireAuthentication = requireAuthentication(Info);

const AdminInfo = withAdminWarning(Info);
