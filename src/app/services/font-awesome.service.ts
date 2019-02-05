import { Injectable } from "@angular/core";
import {
  faLinkedin,
  faGithub,
  faStackOverflow,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeName } from "../models/enums/fa.enum";

@Injectable({
  providedIn: "root"
})
export class FontAwesomeService {
  // brands
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faStackOverflow = faStackOverflow;
  faTwitter = faTwitter;

  // solid
  faEnvelope = faEnvelope;

  constructor() {}

  findFont(fa: FontAwesomeName): any {
    switch (fa) {
      case FontAwesomeName.FA_ENVELOPE:
        return this.faEnvelope;
      case FontAwesomeName.FA_GITHUB:
        return this.faGithub;
      case FontAwesomeName.FA_STACK_OVERFLOW:
        return this.faStackOverflow;
      case FontAwesomeName.FA_TWITTER:
        return this.faTwitter;
      default:
        return null;
    }
  }
}
