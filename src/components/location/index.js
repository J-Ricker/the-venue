import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.890527859161!2d-81.37917469999991!3d28.54301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77afe974cf731%3A0xd5a2ebf590fd93a5!2sThe+Beacham!5e0!3m2!1sen!2sus!4v1554393543428!5m2!1sen!2sus" width="100%" height="500" frameBorder="0" allowFullScreen title="map"></iframe>
        
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    )
}

export default Location;