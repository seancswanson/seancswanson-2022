import { Component, OnInit } from "@angular/core";
import { Project } from "./project.model";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent implements OnInit {
  isUnder700px: boolean = window.innerWidth < 700;
  projects: Project[] = [
    new Project(
      "The Majesty of the Thirty-Six Views of Mt. Fuji",
      "../../../assets/fuji-sm.png",
      "An interactive gallery of the most iconic collection of Japanese woodblock art by Katsushika Hokusai... in high-resolution!",
      [
        "JavaScript",
        "ES6",
        "Openseadragon.js",
        "SVG.js",
        "HTML",
        "CSS",
        "CSS Grid",
      ],
      "http://majesty-of-36-views.glitch.me/",
      "https://github.com/seanthaswan/osd-woodblocks"
    ),
    new Project(
      "Chairman of the Board",
      "../../../assets/chairman-sm.png",
      "A retro front-end corporate ladder simulator game. I reimagined a game that my father had programmed in basic in the 80's to bring it up to modern specs!",
      ["JavaScript", "jQuery", "HTML5", "CSS3"],
      "//seancswanson.com/chairman-of-the-board/",
      "https://github.com/seanthaswan/chairman-of-the-board"
    ),
    new Project(
      "Pigmentation Presumption",
      "../../../assets/pig-sm.png",
      "A front-end color guessing game to help sharpen your eye for color! Soon to add hex code challenge for the elites.",
      ["JavaScript", "HTML5", "CSS3"],
      "https://pigmentation-presumption.glitch.me/",
      "https://github.com/seanthaswan/pigmentation-presumption"
    ),
  ];
  constructor() {}

  sanitizeURL(url: string) {
    // return this.sanitization.bypassSecurityTrustStyle(`url(${element.image})`)
  }
  ngOnInit() {}
}
