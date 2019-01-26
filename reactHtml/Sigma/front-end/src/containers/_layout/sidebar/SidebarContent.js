import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';
import {changeThemeToDark, changeThemeToLight} from '../../../redux/actions/themeActions';

class SidebarContent extends PureComponent {
  changeToDark = () => {
    this.props.dispatch(changeThemeToDark());
    this.hideSidebar();
  };
  
  changeToLight = () => {
    this.props.dispatch(changeThemeToLight());
    this.hideSidebar();
  };
  
  hideSidebar = () => {
    this.props.onClick();
  };
  
  render() {
    return (
      <div className='sidebar__content'>
        <ul className='sidebar__block'>
          <SidebarCategory title='Credit' icon='inbox'>
            <SidebarLink title='All' route='/module/credit' onClick={this.hideSidebar}/>
            <SidebarLink title='New' route='/module/futureDev' onClick={this.hideSidebar}/>
            <SidebarLink title='Resubmits' route='/module/futureDev' onClick={this.hideSidebar}/>
            <SidebarLink title='Decisioned' route='/module/futureDev' onClick={this.hideSidebar}/>
            <SidebarLink title='Resubmitts' route='/module/futureDev' onClick={this.hideSidebar}/>
            <SidebarLink title='Exception' route='/module/futureDev' onClick={this.hideSidebar}/>
          </SidebarCategory>

          <SidebarCategory title='PHASE 2 + 3' icon='rocket'> 
            <SidebarCategory title='Income'>  
              <SidebarLink title='Ready for review' route='/module/futureDev' onClick={this.hideSidebar}/>
              <SidebarLink title='Resubmits' route='/module/futureDev' onClick={this.hideSidebar}/>
              <SidebarLink title='Income Pending' route='/module/futureDev' onClick={this.hideSidebar}/>
              <SidebarLink title='All' route='/module/futureDev' onClick={this.hideSidebar}/>
            </SidebarCategory>

            <SidebarCategory title='Documents'>
              <SidebarLink title='New Documents' route='/module/futureDev' onClick={this.hideSidebar}/>
              <SidebarLink title='Completed' route='/module/futureDev' onClick={this.hideSidebar}/>
              <SidebarLink title='Recycle Bin' route='/module/futureDev' onClick={this.hideSidebar}/>
            </SidebarCategory>

            <SidebarCategory title='Funding'>
              <SidebarLink title='Awaiting Approval' route='/module/futureDev' onClick={this.hideSidebar}/>
              <SidebarLink title='Ready for Review' route='/module/futureDev' onClick={this.hideSidebar}/>
              <SidebarLink title='Deficient' route='/module/futureDev' onClick={this.hideSidebar}/>
              <SidebarLink title='Deficient - New Docs' route='/module/futureDev' onClick={this.hideSidebar}/>
              <SidebarLink title='Income Pending' route='/module/futureDev' onClick={this.hideSidebar}/>
              <SidebarLink title='Funding' route='/module/futureDev' onClick={this.hideSidebar}/>
              <SidebarLink title='Unwound' route='/module/futureDev' onClick={this.hideSidebar}/>
              <SidebarLink title='Funded' route='/module/futureDev' onClick={this.hideSidebar}/>
              <SidebarLink title='All' route='/module/futureDev' onClick={this.hideSidebar}/>
            </SidebarCategory>

            <SidebarLink title='Messages' route='/module/futureDev' onClick={this.hideSidebar}/> 
            <SidebarLink title='Settings' route='/module/futureDev' onClick={this.hideSidebar}/>

          </SidebarCategory> 

        </ul>
      </div>
    )
  }
}

export default connect()(SidebarContent);