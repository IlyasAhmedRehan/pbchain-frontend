import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-agency',
  templateUrl: './featured-agency.component.html',
  styleUrls: ['./featured-agency.component.css']
})
export class FeaturedAgencyComponent implements OnInit {

  itemsPerSlide = 5;
  singleSlideOffset = true;
  
  properties = [
    {
      city : "Karachi",
      location : "Defecnce",
      propertyArea : 500,
      bedroom : 4,
      totalRooms : 6,
      washroom : 3,
      cost : 10000000,
      purpose : "Rent"
    },
    {
      city : "Lahore",
      location : "Defecnce",
      propertyArea : 500,
      bedroom : 4,
      totalRooms : 6,
      washroom : 3,
      cost : 10000000,
      purpose : "Rent"
    },
    {
      city : "Karachi",
      location : "Defecnce",
      propertyArea : 1000,
      bedroom : 5,
      totalRooms : 6,
      washroom : 3,
      cost : 10000000,
      purpose : "Sale"
    },
    {
      city : "Islamabad",
      location : "Defecnce",
      propertyArea : 1000,
      bedroom : 5,
      totalRooms : 6,
      washroom : 3,
      cost : 10000000,
      purpose : "Sale"
    },
    {
      city : "Hyderabad",
      location : "Defecnce",
      propertyArea : 1000,
      bedroom : 5,
      totalRooms : 6,
      washroom : 3,
      cost : 10000000,
      purpose : "Sale"
    },
    {
      city : "Quetta",
      location : "Defecnce",
      propertyArea : 1000,
      bedroom : 5,
      totalRooms : 6,
      washroom : 3,
      cost : 10000000,
      purpose : "Sale"
    },
    {
      city : "Peshawar",
      location : "Defecnce",
      propertyArea : 1000,
      bedroom : 5,
      totalRooms : 6,
      washroom : 3,
      cost : 10000000,
      purpose : "Sale"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
