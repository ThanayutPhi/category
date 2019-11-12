import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      { path: 'home', loadChildren: 'src/app/main/home/home.module#HomePageModule' },
      { path: 'category', loadChildren: 'src/app/main/category/category.module#CategoryPageModule' },
      { path: 'credit', loadChildren: 'src/app/main/credit/credit.module#CreditPageModule' },
      { path: 'cart', loadChildren: 'src/app/main/cart/cart.module#CartPageModule' },
      { path: 'account', loadChildren: 'src/app/main/account/account.module#AccountPageModule' },
      {
        path: '',
        redirectTo: '/tabs/category',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/category',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
