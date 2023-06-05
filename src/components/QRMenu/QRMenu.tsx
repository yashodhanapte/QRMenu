import React from 'react';
import './QRMenu.css';
import MenuItemCard from '../MenuItemCard/MenuItemCard';

const QRMenu = () => {
  return (
    <div className="interior-section-two menu-section">
      <div className="menu-list menu-list__dotted menu-list-1">
        <h2 className="menu-list__title">Starters</h2>
        <hr className="separator" />
        <ul className="menu-list__items">

          <li className="menu-list__item">
            <h4 className="menu-list__item-title">
              <span className="item_title">Soup</span>
              <span className="dots"></span>
            </h4>
            <p className="menu-list__item-desc">
              <span className="desc__content"></span></p><p>Lorem ipsum dolor sit amet</p>

            <p></p>
            <span className="dots"></span>
            <span className="menu-list__item-price"><p>8</p>
            </span>
          </li>

          <li className="menu-list__item">
            <h4 className="menu-list__item-title">
              <span className="item_title">Pasta</span>
              <span className="dots"></span>
            </h4>
            <p className="menu-list__item-desc">
              <span className="desc__content"></span></p><p>Lorem ipsum dolor sit amet</p>

            <p></p>
            <span className="dots"></span>
            <span className="menu-list__item-price"><p>18</p>
            </span>
          </li>

          <li className="menu-list__item">
            <h4 className="menu-list__item-title">
              <span className="item_title">Salad</span>
              <span className="dots"></span>
            </h4>
            <p className="menu-list__item-desc">
              <span className="desc__content"></span></p><p>Lorem ipsum dolor sit amet</p>

            <p></p>
            <span className="dots"></span>
            <span className="menu-list__item-price"><p>16</p>
            </span>
          </li>

          <li className="menu-list__item">
            <h4 className="menu-list__item-title">
              <span className="item_title">Burger</span>
              <span className="dots"></span>
            </h4>
            <p className="menu-list__item-desc">
              <span className="desc__content"></span></p><p>Grass-fed beef, Vermont cheddar, carmelized onions, brioche bun</p>

            <p></p>
            <span className="dots"></span>
            <span className="menu-list__item-price"><p>12</p>
            </span>
          </li>
        </ul>
      </div>

      <div className="menu-list menu-list__dotted menu-list-2">
        <h2 className="menu-list__title">Entrees</h2>
        <hr className="separator" />
        <ul className="menu-list__items">

          <li className="menu-list__item">
            <h4 className="menu-list__item-title">
              <span className="item_title">Soup</span>
              <span className="dots"></span>
            </h4>
            <p className="menu-list__item-desc">
              <span className="desc__content"></span></p><p>Lorem ipsum dolor sit amet</p>

            <p></p>
            <span className="dots"></span>
            <span className="menu-list__item-price"><p>8</p>
            </span>
          </li>

          <li className="menu-list__item">
            <h4 className="menu-list__item-title">
              <span className="item_title">Pasta</span>
              <span className="dots"></span>
            </h4>
            <p className="menu-list__item-desc">
              <span className="desc__content"></span></p><p>Lorem ipsum dolor sit amet</p>

            <p></p>
            <span className="dots"></span>
            <span className="menu-list__item-price"><p>18</p>
            </span>
          </li>

          <li className="menu-list__item">
            <h4 className="menu-list__item-title">
              <span className="item_title">Salad</span>
              <span className="dots"></span>
            </h4>
            <p className="menu-list__item-desc">
              <span className="desc__content"></span></p><p>Lorem ipsum dolor sit amet</p>

            <p></p>
            <span className="dots"></span>
            <span className="menu-list__item-price"><p>16</p>
            </span>
          </li>

          <li className="menu-list__item">
            <h4 className="menu-list__item-title">
              <span className="item_title">Burger</span>
              <span className="dots"></span>
            </h4>
            <p className="menu-list__item-desc">
              <span className="desc__content"></span></p><p>Grass-fed beef, Vermont cheddar, carmelized onions, brioche bun</p>

            <p></p>
            <span className="dots"></span>
            <span className="menu-list__item-price"><p>12</p>
            </span>
          </li>
        </ul>
      </div>

      <MenuItemCard 
        name='Red Pasta'
        description='straight from Italia!'
        price='Rs. 280'
        isVeg={true}
        imageUrl={'https://static.toiimg.com/thumb/84784534.cms?imgsize=468021&width=800&height=800'}
      />
    </div>
  )
}

export default QRMenu;