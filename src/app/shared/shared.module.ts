import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [],
  imports: [CommonModule, TranslateModule, FlexLayoutModule],
  exports: [TranslateModule, FlexLayoutModule]
})
export class SharedModule {}
