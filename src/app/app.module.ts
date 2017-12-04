import { BrowserModule }       from '@angular/platform-browser';
import { NgModule }            from '@angular/core';
import { FormsModule }         from '@angular/forms';
import { HttpModule }          from '@angular/http';

// Rutas
import { routing, appRoutingProviders } from './app.routing';

// Servicios
import { InterpreteService } from './service/interprete.service';

// Componentes
import { AppComponent }        from './app.component';
import { FotosComponent }      from './fotos/fotos.component';
import { NavbarComponent }     from './navbar/navbar.component';
import { AboutComponent }      from './about/about.component';
import { ContactComponent }    from './contact/contact.component';
import { InterpreteComponent }    from './interprete/interprete.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FotosComponent,
    AboutComponent,
    ContactComponent,
    InterpreteComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    InterpreteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

