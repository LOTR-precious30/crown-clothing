import React from 'react'
import MenuItem from '../menu-item/menu-item.component'
import './directory.style.scss'

import { connect } from 'react-redux';

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {
      sections.map( ({ title, imageUrl, id, size, linkUrl }) => ( 
      <MenuItem key={id} title={title.toUpperCase()} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
      ))
    }
  </div>
);

const mapStateToProps = ({ directory: { sections } }) => (
  {
    sections
  }
)

export default connect(mapStateToProps)(Directory);