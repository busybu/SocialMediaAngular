import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComunityPageComponent } from './comunity-page/comunity-page.component';
import { FeedPageComponent } from './feed-page/feed-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NewAccountPageComponent } from './new-account-page/new-account-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { RecoverPageComponent } from './recover-page/recover-page.component';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [
  { path: "", component: HomePageComponent },
  {
    path: "login",
    component: LoginPageComponent,
    children: [
      { path: "newaccount", component: NewAccountPageComponent }
    ]
  },
  { path: "feed", title: "Feed", component: FeedPageComponent },
  { path: "comunity", title: "Comunidades", component: ComunityPageComponent },
  { path: "recover/:email", title: "Recuperar Senha", component: RecoverPageComponent }, // Agora podemos mandar recover/
  //valor para mandar um parâmetro para rota
{ path: "recover", title: "Recuperar Senha", component: RecoverPageComponent }, // Podemos fazer rotas com e sem
  //parâmetros
{ path: "user", title: "Página de Usuário", component: UserPageComponent },
  { path: "**", title: "Not Found", component: NotFoundPageComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
