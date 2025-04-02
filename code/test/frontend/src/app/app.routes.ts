import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard-component.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NewExerciseComponent } from './components/new-exercise/new-exercise.component';
import { NewPlanComponent } from './components/new-plan/new-plan.component';
import { StatisticComponent } from './components/statistic/statistic.component';


export const routes: Routes = [
{ path: 'dashboard', component: DashboardComponent},
{ path: 'profile', component: ProfileComponent},
{ path: 'new/exercise', component: NewExerciseComponent},
{ path: 'new/plan', component: NewPlanComponent},
{ path: 'statistic', component: StatisticComponent},
];
