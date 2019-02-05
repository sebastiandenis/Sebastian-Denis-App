import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MyPhotoComponent } from "./components/my-photo/my-photo.component";
import { SocialLinksComponent } from "./components/social-links/social-links.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [MyPhotoComponent, SocialLinksComponent],
  imports: [CommonModule, TranslateModule, FlexLayoutModule, FontAwesomeModule],
  exports: [
    TranslateModule,
    FlexLayoutModule,
    FontAwesomeModule,
    MyPhotoComponent,
    SocialLinksComponent
  ]
})
export class SharedModule {}
