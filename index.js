import {HeaderStruct} from "./Structs/HeaderStruct.js";
import {FooterStruct} from "./Structs/FooterStruct.js";
import {GalleryStruct} from "./Structs/GalleryStruct.js";

import Component from "./Generator/Generator.js";

const Header = new Component(HeaderStruct());
const Footer = new Component(FooterStruct());
const Gallery = new Component(GalleryStruct());

const parent = document.getElementById("app");


Header.render(parent);
Gallery.render(parent);
Footer.render(parent);
