/**
 * @desc: Collection of Core Animations
*/
import {
  SlideAnimation           ,
  AnimationProvider        ,
  AnimationSlideToTop      ,
  AnimationSlideToLeft     ,
  AnimationSlideToRight    ,
  AnimationSlideToBottom    } from './core';
/**
 * @description: Collection of Core Components
*/
import {
  BusyDirective     ,
  MenuComponent     ,
  LoaderComponent   ,
  MenuItemComponent     } from './core';
/**
 * @desc: Collection of Layout Elements
*/
import {
  ItemComponent           ,
  ViewComponent           ,
  TitleComponent          ,
  ChildComponent          ,
  ContentComponent        ,
  ElementComponent        ,
  FragementComponent      ,
  PageTitleComponent      ,
  SectionTitleComponent     } from './layout';
/**
 * @desc: Collection of Layout Templates
 */
import {
  ShellComponent          ,
  MainComponent           ,
  HeaderComponent         ,
  SideMenuComponent       ,
  SubHeaderComponent      ,
  DevToolbarComponent     ,
  ConfirmLogoutDialogComponent  } from './layout/template';
/**
 * @desc: Export of const COLLECTION_CORE_ANIMATIONS
 */
export const COLLECTION_CORE_ANIMATIONS = [
  SlideAnimation           ,
  AnimationProvider        ,
  AnimationSlideToTop      ,
  AnimationSlideToLeft     ,
  AnimationSlideToRight    ,
  AnimationSlideToBottom
];
/**
 * @desc: Export of const COLLECTION_CORE_COMPONENTS
 */
export const COLLECTION_CORE_COMPONENTS = [
  BusyDirective     ,
  MenuComponent     ,
  LoaderComponent   ,
  MenuItemComponent
];
/**
 * @desc: Export of const COLLECTION_LAYOUT_ELEMENTS
 */
export const COLLECTION_LAYOUT_ELEMENTS = [
  ItemComponent           ,
  ViewComponent           ,
  TitleComponent          ,
  ChildComponent          ,
  ContentComponent        ,
  ElementComponent        ,
  FragementComponent      ,
  PageTitleComponent      ,
  SectionTitleComponent
];
/**
 * @desc: Export of const COLLECTION_LAYOUT_TEMPLATES
 */
export const COLLECTION_LAYOUT_TEMPLATES = [
  ShellComponent          ,
  MainComponent           ,
  HeaderComponent         ,
  SideMenuComponent       ,
  SubHeaderComponent      ,
  DevToolbarComponent     ,
  ConfirmLogoutDialogComponent
];
/**
 * @desc: Export of const COLLECTION_ENTRY_COMPONENTS
 */
export const COLLECTION_ENTRY_COMPONENTS = [
  LoaderComponent,
  ConfirmLogoutDialogComponent
];
/**
 * @desc:  To import into module, use the following:
   @code:  import { COLLECTION_CORE_ANIMATIONS, COLLECTION_CORE_COMPONENTS,  COLLECTION_ENTRY_COMPONENTS, COLLECTION_LAYOUT_ELEMENTS, COLLECTION_LAYOUT_TEMPLATES } from './fabric.constants.ts';
*/
