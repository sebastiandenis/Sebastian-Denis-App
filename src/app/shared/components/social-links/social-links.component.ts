import { Component, OnInit, Input } from "@angular/core";
import { ISocialMediaItem } from "../../../models/social-media-item.model";
import { FontAwesomeService } from "../../../services/font-awesome.service";

@Component({
  selector: "app-social-links",
  templateUrl: "./social-links.component.html",
  styleUrls: ["./social-links.component.scss"]
})
export class SocialLinksComponent implements OnInit {
  @Input()
  links: ISocialMediaItem[];

  constructor() {
  }

  ngOnInit() {
    console.dir(this.links);
  }
}
