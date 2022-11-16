import React, {PureComponent} from 'react';
import Checkbox from "../Checkbox/Checkbox";
import {ReactComponent as SettingsIcon} from '../../../images/icons/settings.svg';

import './Menu.scss';

class Menu extends PureComponent {
  constructor(props) {
		super(props);
		this.state = {
			isMenuOpen: false,
		};
		this.toggleMenu = this.toggleMenu.bind(this);
	}

	toggleMenu() {
    const {isMenuOpen} = this.state;
    this.setState({
      isMenuOpen: !isMenuOpen
    })
  }

  render() {
    const { className } = this.props;
    const { isMenuOpen } = this.state;
    return (
      <div className={`menu${className ? ` ${className}` : ''}`}>
        <button
          className="menu__main-button"
          onClick={this.toggleMenu}
        >
          <SettingsIcon />
        </button>
        {isMenuOpen && <div className="menu__body">
          <div className="menu__section">
            <div className="menu__title">Theme</div>
            <button className={`menu__theme-button`}>
              Dark
            </button>
            <button className={`menu__theme-button menu__theme-button--active`}>
              Light
            </button>
          </div>
          <div className="menu__section">
            <div className="menu__title">New tab</div>
            <div className="menu__text">Open search results in new tab</div>
            <Checkbox defaultChecked/>
          </div>
          <div className="menu__section">
            <div className="menu__title">Search suggestions</div>
            <div className="menu__text">Turn search suggestions on</div>
            <Checkbox defaultChecked/>
          </div>
          <div className="menu__section">
            <div className="menu__title">Approximate location</div>
            <Checkbox defaultChecked/>
          </div>
        </div>}
      </div>
    );
  }
}

export default Menu;
