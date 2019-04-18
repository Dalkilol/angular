import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AttribComponent } from './attrib/attrib.component';
import { BindingComponent } from './binding/binding.component';
import { componentFactoryName } from '@angular/compiler';
import { DirectivesComponent } from './directives/directives.component';
import { LusersComponent } from './lusers/lusers.component';
import { HttpModule } from '@angular/http';
import { CuserComponent } from './cuser/cuser.component';


@NgModule({
  declarations: [
    AppComponent,
    AttribComponent,
    BindingComponent,
    DirectivesComponent,
    LusersComponent,
    CuserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([

      {
        path: 'binding',
        component: BindingComponent,
      },

      {
        path: 'attrib',
        component: AttribComponent,
      },

      { 
        path: 'directives',
        component: DirectivesComponent,
      },

      { 
        path: 'lusers',
        component: LusersComponent,
      },

      { 
        path: 'cuser',
        component: CuserComponent,
      }

      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
