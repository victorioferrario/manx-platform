import { HttpInterceptor } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import {
    NavigationCancel,
    Event,
    RouterEvent,
    ChildActivationStart,
    ChildActivationEnd,
    NavigationEnd,
    NavigationError,
    NavigationStart,
    Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class ApplicationRoutingService {
    protected __router:Router;
    constructor(private ctxRouter: Router) {
        const self = this;
        if(ctxRouter){
            console.log("ctxRouter", "good", ctxRouter);
            // self.loadRouter(ctxRouter);
        }
    }
    loadRouter(localRouter:Router){
        const self = this;
        if(localRouter){            
            self.__router = localRouter;
            self.__router.events.subscribe((event: Event) => {
                self.navigationInterceptor(event);
            });
        }  
    }
    navigationInterceptor(event: Event) {
        console.log(event); 
    }
}