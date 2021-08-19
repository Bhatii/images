import clsx from 'clsx';
import React from 'react';

const Image = ({alt, className, rotations, scale, src}) => {
    const classes = clsx('img-fluid', {
        [className]: true
    });
    return (
        <div>
            <img className={classes} src={src} alt={alt} />
        </div>
    )
}

export default Image;
