import React from 'react';

const SitePreview = ({imageSource, href, buttonText, description, video, target}) => {

  return (
    <div id="sitepreview">
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignTtems: 'center',
        padding:'10px',
        marginBottom: '20px',
      }}>
        {
          video && video
        }
        <div><img style={{
          width: '100%'
        }} src={imageSource} /></div> 
        <p>{description}</p> 
      </div> 
      <a className="swal2-confirm swal2-styled" style={{
        textDecoration: 'none',
        fontWeight:'bold'
      }} href={href} target={target}>{buttonText}</a>
    </div>
  )
}

export default SitePreview;