import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../app.routes';


@Component({
  selector: 'app-dashboard',
  imports: [RouterModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Dashboard {

    public dashboardItems = routes
    .map( route => route.children ?? [] )
    .flat()
    .filter( route => route && route.path )

  constructor(){
    // const dashboardRoutes = routes
    // .map( route => route.children ?? [] )
    // .flat()
    // .filter( route => route && route.path )

    // console.log(dashboardRoutes)
  }
}
