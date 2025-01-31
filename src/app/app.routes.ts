import type { Routes } from "@angular/router";

import { BoardComponent } from "./pages/private/board/board.component";
import { LandingPageComponent } from "./pages/public/landing-page/landing-page.component";

export const routes: Routes = [
	{ path: "", component: LandingPageComponent },
	{ path: "board", component: BoardComponent },
];
