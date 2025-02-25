import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Video } from '../models/video.model';
import { videoService } from '../service/video.service';

@Component({
  selector: 'app-video',
  imports: [CommonModule, MatButtonModule, ],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent implements OnInit {

  videos:Video[]=[]
  constructor(private videoservice: videoService){}

 ngOnInit(): void {
   this.videos=this.videoservice.getAllQuest()
 }
}
