import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { SubjectComponent } from './app/subject/subject.component';
import { BehviorsubjectComponent } from './app/behviorsubject/behviorsubject.component';
import { TakComponent } from './app/tak/tak.component';
bootstrapApplication(TakComponent, appConfig)
  .catch((err) => console.error(err));
