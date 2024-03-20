import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { CalculatorComponent } from './app/calculator/calculator.component';

const bootstrap = () => bootstrapApplication(CalculatorComponent, config);

export default bootstrap;
