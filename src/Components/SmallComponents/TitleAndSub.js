import React from 'react'

export  function TitleAndSubTitle({title,subTitle,classNameh}) {
  return (
      <div className='text-left title-and-sub '>
          <h2 className={` ${classNameh}`}>{title}</h2>
          <p>{subTitle}</p>
    </div>
  )
}
