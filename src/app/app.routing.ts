import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Importar componentes
import { AboutComponent } 	from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FotosComponent } 	from './fotos/fotos.component';
import { InterpreteComponent } 	from './interprete/interprete.component';


const appRoutes: Routes = [
	{
		path: '', 
		component: AboutComponent
	},
	{
		path: 'fotos', 
		component: FotosComponent
	},
	{
		path: 'fotos/:page', 
		component: FotosComponent
	},
	{
		path: 'contact', 
		component: ContactComponent
	},
	{
		path: 'about', 
		component: AboutComponent
	},
	{
		path: 'interprete', 
		component: InterpreteComponent
	},
	{
		path: '**', 
		component: AboutComponent
	} // Esta seria el error
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
