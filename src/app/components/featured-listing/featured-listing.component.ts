import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-listing',
  templateUrl: './featured-listing.component.html',
  styleUrls: ['./featured-listing.component.css']
})
export class FeaturedListingComponent implements OnInit {

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
  // Array of images

 // Slider Images
 slides = [
  {image: 'https://i.redd.it/56ievlpuxs341.jpg'},
  {image: 'https://i.redd.it/56ievlpuxs341.jpg'},
  {image: 'https://www.fensforthefuture.org.uk/admin/resources/5362f10212fwicken-fenthumb460x02c0-1-w320h200.jpg'},
  {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsgqaIE1_jvICDPtYASmv413AhKv7p3-vLKj1RCQibni1VMgERSGi79w2t4OQDClbHLgY&usqp=CAU'},
  {image: 'https://live.staticflickr.com/1948/31549494038_1938d7375c_b.jpg'},
  {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROw58a255tugTpdKEdLmfLmJztt7fkfBC3Cg&usqp=CAU'},
  {image: 'https://i.redd.it/56ievlpuxs341.jpg'},
  {image: 'https://thumbs.dreamstime.com/t/sunset-heaven-10919821.jpg'},
  {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsgqaIE1_jvICDPtYASmv413AhKv7p3-vLKj1RCQibni1VMgERSGi79w2t4OQDClbHLgY&usqp=CAU'},
  {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROw58a255tugTpdKEdLmfLmJztt7fkfBC3Cg&usqp=CAU'}
]

 constructor() { }

  ngOnInit(): void {
  }

}
