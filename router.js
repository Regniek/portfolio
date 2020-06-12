class Router {

    constructor(routes) {
        this.routes = routes;
        this._loadInitialRoute();
    }

 loadRoute(...urlSegs){

    const matchedRoute = this._matchUrlToRoute(urlSegs);

    const url = `/${urlSegs.join('/')}`;
    history.pushState({},'this works', url);
    console.log(url)

    const routerOutElm = document.querySelectorAll('[data-router]')[0];
    
    
    routerOutElm.innerHTML = matchedRoute.template;
    

 }

_matchUrlToRoute(urlSegs){
    const matchedRoute = this.routes.find(route => {
        
        const routePathSegs = route.path.split('/').slice(1)
        
        console.log(routePathSegs)
        console.log(urlSegs)
        if (routePathSegs.length !== urlSegs.length){
            console.log('Entro aqui')
            return false;
        }
        
        console.log(urlSegs[0])
        
        return routePathSegs
            
            .every((routePathSeg, i) => routePathSeg === urlSegs[i]);
        

    });
    
    return matchedRoute;
}


_loadInitialRoute() {

    const pathNameSplit = window.location.pathname.split('/');
    const pathSegs = pathNameSplit.length > 1 ? pathNameSplit.slice(1): '';

    

    this.loadRoute(...pathSegs);
    }

}
