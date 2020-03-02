import React from 'react'
import './directory.style.scss'
import MenuItem from '../menu-item/menu-item.component'
import {selectDirectorySection} from '../../redux/directory/directory.selector'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

const Directory = ({sections}) => (
  <div className='directory-menu'>
      {
        sections.map(({id,...otherSectionProps}) => (
          <MenuItem key={id} {...otherSectionProps}
          />))
      }
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections:selectDirectorySection
});

export default connect(mapStateToProps)(Directory);