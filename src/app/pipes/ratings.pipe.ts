import { Pipe, PipeTransform } from '@angular/core';
import { Comment } from 'src/app/models/comment';

@Pipe({
  name: 'ratings'
})
export class RatingsPipe implements PipeTransform {

  transform(comments: Array<Comment>): number {
    let average = 0;
    for(let comment of comments){

      average+=comment.rating;
    }
    let total = Math.round(average/(comments.length) * 10)/10;
    return total;
  }

}
