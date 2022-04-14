import React from 'react';
import './ImageComponent.css';
const HEIGHT = window.innerWidth < 720 ? 200 : 400;

// w/h = wx/400

const ImageComponent = (props) => {
    const imageURL = props.urls.small;
    const width = (props.width * HEIGHT) / props.height;
    return (
        <div className="image-container">
            <img src={imageURL} alt="" style={{ height: HEIGHT, width }} />
            <div className="image-info">
                <img src={props.user.profile_image.small} alt="profile" />
                &nbsp; &nbsp;
                <div className="photographer-details">
                    <p>{`${props.user.first_name} ${props.user.last_name}`}</p>
                    <span>{`${props.likes} likes recieved`}</span>
                </div>
            </div>
        </div>
    );
};

export default ImageComponent;
