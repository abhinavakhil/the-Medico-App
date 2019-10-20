import { Component, OnInit, OnDestroy, HostListener } from "@angular/core";
import { Router } from "@angular/router";
import Chart from "chart.js";

@Component({
  selector: "app-userdoctorprofile",
  templateUrl: "./userdoctorprofile.component.html",
  styleUrls: ["./userdoctorprofile.component.scss"]
})
export class UserdoctorprofileComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  focus;
  focus1;
  focus2;

  constructor(private router: Router) {}
  @HostListener("document:mousemove", ["$event"])
  onMouseMove(e) {
    var squares1 = document.getElementById("square1");
    var squares2 = document.getElementById("square2");
    var squares3 = document.getElementById("square3");
    var squares4 = document.getElementById("square4");
    var squares5 = document.getElementById("square5");
    var squares6 = document.getElementById("square6");
    var squares7 = document.getElementById("square7");
    var squares8 = document.getElementById("square8");

    var posX = e.clientX - window.innerWidth / 2;
    var posY = e.clientY - window.innerWidth / 6;

    squares1.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares2.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares3.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares4.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares5.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares6.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares7.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.02 +
      "deg) rotateX(" +
      posY * -0.02 +
      "deg)";
    squares8.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.02 +
      "deg) rotateX(" +
      posY * -0.02 +
      "deg)";
  }

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("register-page");

    // this.onMouseMove(event);

    // var canvas: any = document.getElementById("lineChartExample");
    // var ctx = canvas.getContext("2d");
    // var gradientFill = ctx.createLinearGradient(0, 350, 0, 50);
    // gradientFill.addColorStop(0, "rgba(228, 76, 196, 0.0)");
    // gradientFill.addColorStop(1, "rgba(228, 76, 196, 0.14)");
    var canvas: any = document.getElementById("myChart");
    var ctx = canvas.getContext("2d");
    var myChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["cancelled", "pending", "successful", "unsuccessful"],
        // red - cancelled appointment
        // yellow-pending appointment
        // green -successfully checked patient
        // blue - unsuccessful checked
        datasets: [
          {
            label: "# of Votes",
            data: [2, 5, 10, 1],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)", //red,

              "rgba(255,204,0,0.2)", //yellow
              "rgba(0,255,0,0.2)", //green
              "rgba(54, 162, 235, 0.2)" //blue
            ],
            borderColor: [
              "rgba(255, 99, 132, 0.2)", //red,

              "rgba(255,204,0,0.2)", //yellow
              "rgba(0,255,0,0.2)", //green
              "rgba(54, 162, 235, 0.2)" //blue
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("register-page");
  }

  // save(formdata) {
  //   console.log(formdata);
  //   if (formdata.email && formdata.uniqueid) {
  //     this.router.navigate(["/userprofile"]);
  //   }
}
