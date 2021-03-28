import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Anime from 'react-anime';

class Contact extends PureComponent {
    render() {
        return (
            <div>
                <Anime easing="linear"
                    translateX={[
                        { value: -50, duration: 500 },
                        { value: 0, duration: 1000 }
                    ]}
                    scale={[
                        { value: 0, duration: 0 },
                        { value: 1, duration: 1000 }
                    ]}
                >
                    <h1>contact</h1>
                </Anime>

            </div>
        );
    }
}

Contact.propTypes = {

};

export default Contact;