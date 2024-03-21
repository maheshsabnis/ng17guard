import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { CalculatorComponent } from './app/calculator/calculator.component';
import { ProductComponent } from './app/product/product.component';
// Client-Side Rendering
// Parameters:
// P1: The Class Name of the Standalone Component
// P2: The Configuration for Running the Component in Browser e.g. Router, hyderation, Http Client, etc.
bootstrapApplication(ProductComponent, appConfig)
  .catch((err) => console.error(err));
