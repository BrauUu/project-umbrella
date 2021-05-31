import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowDbComponent } from './show-db/show-db.component';
import { ShowUmbrelasComponent } from './show-umbrelas/show-umbrelas.component';
import { CreateUmbrellaComponent } from './create-umbrella/create-umbrella.component';
import { UpdateUmbrellaComponent } from './update-umbrella/update-umbrella.component';

const APP_ROUTES: Routes = [
    { path: '', component: ShowUmbrelasComponent },
    { path: 'showdb', component: ShowDbComponent },
    { path: 'create', component: CreateUmbrellaComponent },
    { path: 'update', component: UpdateUmbrellaComponent}
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);