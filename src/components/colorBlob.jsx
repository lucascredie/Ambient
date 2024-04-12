import React, { useContext } from 'react';
import ThemeContext from '../themeContext';

function ColorBlob(props) {
    let {color} = props;

    let colorClass = "colorBlob " + color;

    const { setTheme } = useContext(ThemeContext);
   
    function set(){
        setTheme(color);
    }

    return (
        <svg onClick={set} className={colorClass} width="39" height="36" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.1473 0.379283C28.1934 1.2438 31.9919 3.18201 34.6639 6.28335C37.3514 9.40257 38.5722 13.4201 38.8904 17.4911C39.2119 21.6037 38.9447 25.9935 36.4651 29.3257C34.0538 32.5662 29.8496 33.7535 25.9309 34.9069C22.3306 35.9665 18.6508 36.3362 14.9564 35.6563C11.0431 34.9361 7.04824 33.8011 4.34583 30.9345C1.56495 27.9847 0.483945 23.9315 0.130452 19.9298C-0.229684 15.853 0.0495214 11.5757 2.33313 8.15023C4.5995 4.75065 8.50595 2.91311 12.3996 1.52608C16.191 0.175441 20.2059 -0.462899 24.1473 0.379283Z" fill={color}/>
        </svg>        
    )
}

export default ColorBlob;