import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SecundariaService } from "../../../service/secundaria.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route: Router, public app: SecundariaService) { }

  ngOnInit(): void {
  }

  Search(searchValue){
    this.route.navigate(['/results', searchValue]);
  }

  
}
