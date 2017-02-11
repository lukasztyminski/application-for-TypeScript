import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app.module";

const platfrom = platformBrowserDynamic();
platfrom.bootstrapModule(AppModule);