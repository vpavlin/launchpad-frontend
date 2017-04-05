import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IntroComponent } from './intro/intro.component';
import { VersionComponent } from './versions/versions.component';
import { FormComponent } from './wizard.component';
import { DeployComponent } from './deploy/deploy.component';
import { ForgeService } from '../shared/forge.service';

import { KeycloakService } from '../shared/keycloak.service';
import { KEYCLOAK_HTTP_PROVIDER } from '../shared/keycloak.http';

import { MultiselectListModule } from '../shared/multiselect-list';
import { ProjectSelectModule } from '../shared/project-select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MultiselectListModule,
    ProjectSelectModule
  ],
  declarations: [
    IntroComponent,
    VersionComponent,
    FormComponent,
    DeployComponent
  ],
  providers: [
    KeycloakService,
    KEYCLOAK_HTTP_PROVIDER,
    ForgeService
  ]
})
export class WizardModule { }
