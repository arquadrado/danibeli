import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'journal',
    pathMatch: 'full',
  },
  {
    path: 'journal',
    loadChildren: () =>
      import('./views/journal/journal.module').then((m) => m.JournalModule),
  },
  {
    path: 'meals',
    loadChildren: () =>
      import('./views/meals/meals.module').then((m) => m.MealsModule),
  },
  {
    path: 'dishes',
    loadChildren: () =>
      import('./views/dishes/dishes.module').then((m) => m.DishesModule),
  },
  {
    path: 'ingredients',
    loadChildren: () =>
      import('./views/ingredients/ingredients.module').then(
        (m) => m.IngredientsModule
      ),
  },
  {
    path: 'moods',
    loadChildren: () =>
      import('./views/moods/moods.module').then((m) => m.MoodsModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
