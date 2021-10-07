import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambioVideoComponent } from './components/cambio-video/cambio-video.component';
import { ChatOnlyComponent } from './components/chat-only/chat-only.component';
import { LandingComponent } from './components/landing/landing.component';
import { StreamingComponent } from './components/streaming/streaming.component';
import { UserListComponent } from './components/user-list/user-list.component';

const streamRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'cambio-video', 
  component: CambioVideoComponent },
  {
    path: 'stream/:userId',
    component: StreamingComponent },
    {
      path: 'chat-only',
      component: ChatOnlyComponent },
      {
        path: 'user-list',
        component: UserListComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(streamRoutes)
  ],
  exports: [
    RouterModule
  ],
})

export class StreamingRoutingModule {
}
