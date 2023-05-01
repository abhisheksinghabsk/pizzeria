import React from "react";
// import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";

import Pepperoni from "../assets/pepperoni.webp";
import Margherita from "../assets/marghrita.jpg";
import PedroTechSpecial from "../assets/pedrotechspecialpizzas.jpeg";
import Vegan from "../assets/vegan.jpg";
import Pineapple from "../assets/pineapple.jpg";
import Expensive from "../assets/expensive.jpg";
import "../styles/Menu.css";

const Menu = () => {
  const myData = [
    {
      name: "Pepperoni Pizza",
      image: Pepperoni,
      price: 199.0,
    },
    {
      name: "Margherita Pizza",
      image: Margherita,
      price: 299.0,
    },
    {
      name: "PedroTech Special Pizza",
      image: PedroTechSpecial,
      price: 250.0,
    },
    {
      name: "Vegan Pizza",
      image: Vegan,
      price: 159.0,
    },
    {
      name: "Pineapple Pizza",
      image: Pineapple,
      price: 235.0,
    },
    {
      name: "Very Expensive Pizza",
      image: Expensive,
      price: 1997.0,
    },
  ];

  console.log(myData);
  return (
    <div className="menu">
      <h3 className="menuTitle">Our Menu</h3>
      <div className="menuList">
        {myData?.map((item, key) => {
          return (
            <MenuItem
              key={key}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
