import React from "react";
import './index.css';
import MenuItem from "./menu-item";

function Navigation () {

 const menu = [
  { title: "HOMEPAGE" },
  {
   title: 'PAGES',
   items: [
    { title: 'Full Width Content' },
    { title: 'Content + Left Slidebar' },
    { title: 'Content + Right Slidebar' },
    { title: 'Content + Both Slidebars' },
    { title: 'Contact' },
    { title: '404' },
    { title: 'Testimonials' },
    { title: 'About Us' },
    { title: 'Team Member' },
    { title: 'FAQ' },
   ]
  },
  {
   title: "ELEMENTS",
   items: [
    { title: 'Buttons' }, 
    { title: 'Alert Messages' },
    { title: 'Font Icons' },
    { title: 'Call to Action' },
    { title: 'Columns' },
    { title: 'Lists' },
    { title: 'Tabs' },
    { title: 'Toggles' },
    { title: 'Pricing Tables' },
   ] 
  },
  {
   title: "PORTFOLIO LAYOTS",
   items: [
    { title: 'Full Width Portfolio' }, 
    { title: '2 Column Grid' },
    { title: '2 Col. Grid+Left Slidebar' },
    { title: '2 Col. Grid+Right Slidebar' },
    { title: '2 Col. Grid+Both Slidebars' },
    { title: '3 Column Grid' },
    { title: '3 Col. Grid+Left Slidebar' },
    { title: '3 Col. Grid+Right Slidebar' },
    { title: '3 Col. Grid+Both Slidebars' },
    ] 
   },
   {
    title: "GALLERY LAYOTS",
    items: [
     { title: 'Full Width Gallery' }, 
     { title: '2 Column Grid' },
     { title: '2 Col. Grid+Left Slidebar' },
     { title: '2 Col. Grid+Right Slidebar' },
     { title: '2 Col. Grid+Both Slidebars' },
     { title: '3 Column Grid' },
     { title: '3 Col. Grid+Left Slidebar' },
     { title: '3 Col. Grid+Right Slidebar' },
     { title: '3 Col. Grid+Both Slidebars' },
     ] 
    },
    { title: "LINK TEXT" },
    { title: "A VERY LONG LINK TEXT" },
 ];

 return (
  <header>
   {menu.map(elem => <MenuItem title={elem.title} items={elem.items} />)}
  </header>
 );
}

export default Navigation;