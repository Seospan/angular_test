import { Routes, RouterModule } from '@angular/router';

import { TestComponent } from './test/index';

const testRoutes: Routes = [
    { path: 'login', component: TestComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(testRoutes);
