import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { CalculatorComponent } from './app/calculator/calculator.component';
import { ProductComponent } from './app/product/product.component';
import { ProductReactiveComponent } from './app/product-reactive/product-reactive.component';
import { PersonComponent } from './app/person/person.component';
import { DynamicPersonComponent } from './app/dynamic-person/dynamic-person.component';
import { InputElementComponent } from './app/input-element/input-element.component';
import { ContainerComponent } from './app/container/container.component';
import { CategoryHttpComponent } from './app/category-http/category-http.component';
import { AuthenticateComponent } from './app/authenticate/authenticate.component';

const bootstrap = () => bootstrapApplication(AuthenticateComponent, config);

export default bootstrap;
