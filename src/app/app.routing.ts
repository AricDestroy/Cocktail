import { Route, RouterModule } from '@angular/router';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { PanierComponent } from './panier/panier.component';

const APP_ROUTE: Route[] = [
    {path : '', redirectTo : 'cocktails', pathMatch: 'full'},
    { path : 'cocktails', component : CocktailContainerComponent},
    { path : 'panier', component : PanierComponent}
];

export const AppRouting = RouterModule.forRoot(APP_ROUTE);
