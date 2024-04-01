import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { CalculatorComponent } from './app/calculator/calculator.component';
import { ProductComponent } from './app/product/product.component';
import { ProductReactiveComponent } from './app/product-reactive/product-reactive.component';
import { PersonComponent } from './app/person/person.component';
import { DynamicPersonComponent } from './app/dynamic-person/dynamic-person.component';
import { InputElementComponent } from './app/input-element/input-element.component';
import { ContainerComponent } from './app/container/container.component';
import { CategoryHttpComponent } from './app/category-http/category-http.component';
import { AuthenticateComponent } from './app/authenticate/authenticate.component';
import { CForkJoinComponent } from './app/cfork-join/cfork-join.component';
import { BFFComponent } from './app/bff/bff.component';
import { RouterContainerComponent } from './app/routingapp/router-container/router-container.component';
import { SignalsComponent } from './app/signals/signals.component';
import { ParentComponent } from './app/parentchildsignals/parent/parent.component';
// Client-Side Rendering
// Parameters:
// P1: The Class Name of the Standalone Component
// P2: The Configuration for Running the Component in Browser e.g. Router, hyderation, Http Client, etc.
bootstrapApplication(ParentComponent, appConfig)
  .catch((err) => console.error(err));
