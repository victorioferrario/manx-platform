import { Component, OnInit } from '@angular/core';
import { LayoutService, Layout } from '@hubx/services';
import { LocalStorageService } from '@hubx/services';
const layoutInstance = new Layout();
    layoutInstance.loading = false;
    layoutInstance.currentView = "home";
    this.local.storeOnLocalStorage(
      layoutInstance);

    //   constructor(private local: LocalStorageService<Layout>) {
    //     const self = this;    
    //   }