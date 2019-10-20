import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./pages/index/index.component";
import { ProfilepageComponent } from "./pages/examples/profilepage/profilepage.component";
import { RegisterpageComponent } from "./pages/examples/registerpage/registerpage.component";
import { LandingpageComponent } from "./pages/examples/landingpage/landingpage.component";
import { LoginComponent } from "./pages/examples/registerpage/login/login.component";
import { DoctorloginComponent } from "./pages/examples/registerpage/doctorlogin/doctorlogin.component";
import { UserdoctorprofileComponent } from "./pages/examples/userdoctorprofile/userdoctorprofile.component";

const routes: Routes = [
  { path: "", redirectTo: "landing", pathMatch: "full" },
  { path: "landing", component: LandingpageComponent },
  { path: "upload", component: IndexComponent },
  { path: "profile", component: ProfilepageComponent },
  { path: "register", component: RegisterpageComponent },
  { path: "login", component: LoginComponent },
  { path: "doctor", component: DoctorloginComponent },
  { path: "doctorprofile", component: UserdoctorprofileComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: []
})
export class AppRoutingModule {}
