import React from 'react';
import Typography from '@mui/material/Typography';
import { ShareIcon,FacebookIcon,TwitterIcon,PinterestIcon } from '../SharedIcons';

export default function ShareSocialMedia(props) {
  const { text, showIcons,classNameParent } = props;

  return (
    <div className={`social-icons  float-right mt-3 ${classNameParent}`}>
      <Typography variant='h6' color='initial'>
        <ShareIcon /> <span className=' social-text'>{text}</span>
      </Typography>
      {showIcons && (
        <>
          <FacebookIcon className='icon' />
          <TwitterIcon className='icon' />
          <PinterestIcon className='icon' />
          {props.children}
        </>
      )}
    </div>
  );
}
