import React, {useState, useTransition, useEffect, Suspense} from 'react';

const Slider = ({children}) => {
    const [currentImage, setCurrentImage] = useState(0);

    return(
        <Suspense>
            {children}
        </Suspense>
    )
}

export default Slider;