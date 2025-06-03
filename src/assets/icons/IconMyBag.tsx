import React from 'react';

const IconMyBag = () => {

  return(
    <React.Fragment>
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20">
        <defs>
          <clipPath id="clip-path">
            <rect width="20" height="20" fill="none"/>
          </clipPath>
        </defs>
        <g id="bag" clipPath="url(#clip-path)">
          <path id="Bag" d="M20.28,20.045H2L3.828,7H18.452Z" transform="translate(-1.14 -0.795)" fill="none" stroke="#111" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="1.5"/>
          <path id="Handle" d="M8,9.182V4.636A3.843,3.843,0,0,1,12,1h0a3.843,3.843,0,0,1,4,3.636V9.182" transform="translate(-2 -0.25)" fill="none" stroke="#111" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="1.5"/>
        </g>
      </svg>
    </React.Fragment>
  )
}

export default IconMyBag;