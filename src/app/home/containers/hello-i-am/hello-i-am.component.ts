import { Component, OnInit } from "@angular/core";
import { ISocialMediaItem } from "../../../models/social-media-item.model";
import { FontAwesomeService } from "../../../services/font-awesome.service";

@Component({
  selector: "app-hello-i-am",
  templateUrl: "./hello-i-am.component.html",
  styleUrls: ["./hello-i-am.component.scss"]
})
export class HelloIAmComponent implements OnInit {

  // todo - get from firebase
  socialLinks: ISocialMediaItem[];

  constructor(faService: FontAwesomeService) {
    this.socialLinks = [
      {
        name: "Stack Overflow profile",
        url: "https://stackoverflow.com/users/story/1288587",
        icon: faService.faStackOverflow
      },
      {
        name: "GitHub profile",
        url: "https://github.com/sebastiandenis",
        icon: faService.faGithub
      },
      {
        name: "Twitter profile",
        url: "https://twitter.com/SebekD",
        icon: faService.faTwitter
      },
      {
        name: "Twitter profile",
        url: "mailto:sebastian.denis@outlook.com",
        icon: faService.faEnvelope
      }
    ];

  }

  ngOnInit() {}
}
