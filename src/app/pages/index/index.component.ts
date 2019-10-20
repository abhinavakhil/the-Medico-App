import { Component, OnInit, OnDestroy } from "@angular/core";
import noUiSlider from "nouislider";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-index",
  templateUrl: "index.component.html",
  styleUrls: ["index.component.css"]
})
export class IndexComponent implements OnInit, OnDestroy {
  title = "fileUpload";
  images;
  multipleImages = [];

  isCollapsed = true;
  focus;
  focus1;
  focus2;
  date = new Date();
  pagination = 3;
  pagination1 = 1;
  // uploadedFiles: Array<File> = [];
  constructor(private http: HttpClient) {}
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");

    var slider = document.getElementById("sliderRegular");

    noUiSlider.create(slider, {
      start: 40,
      connect: false,
      range: {
        min: 0,
        max: 100
      }
    });

    var slider2 = document.getElementById("sliderDouble");

    noUiSlider.create(slider2, {
      start: [20, 60],
      connect: true,
      range: {
        min: 0,
        max: 100
      }
    });
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("index-page");
  }

  // fileChange(element) {
  //   this.uploadedFiles = element.target.files;
  // }

  // upload() {
  //   let formData = new FormData();
  //   for (var i = 0; i < this.uploadedFiles.length; i++) {
  //     formData.append(
  //       "uploads[]",
  //       this.uploadedFiles[i],
  //       this.uploadedFiles[i].name
  //     );
  //   }
  //   this.http.post("/api/upload", formData).subscribe(response => {
  //     console.log("response received is ", response);
  //   });
  // }

  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }

  selectMultipleImage(event) {
    if (event.target.files.length > 0) {
      this.multipleImages = event.target.files;
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append("file", this.images);

    this.http
      .post<any>("/file", formData)
      .subscribe(res => console.log(res), err => console.log(err));
  }

  onMultipleSubmit() {
    const formData = new FormData();
    for (let img of this.multipleImages) {
      formData.append("files", img);
    }

    this.http
      .post<any>("/multipleFiles", formData)
      .subscribe(res => console.log(res), err => console.log(err));
  }
}
