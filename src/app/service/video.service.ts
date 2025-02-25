import { Video } from "../models/video.model";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class videoService{
    private videos : Video[]=[                               
        {
            linkytb: "https://youtube.com/shorts/CEQ5FbU2VFM?si=SyonoUwvsBtQJBhC",
            Titres: 'fds'
        }
    ]

     getAllQuest():Video[]{
           return this.videos
       } 
}
