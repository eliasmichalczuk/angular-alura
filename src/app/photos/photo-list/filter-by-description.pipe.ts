import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo';

@Pipe({
  name: 'filterByDescription'
})
export class FilterByDescriptionPipe implements PipeTransform {

  transform(photos: Array<Photo>, descriptionQuery: string): any {
    if (descriptionQuery !== '' && descriptionQuery !== undefined) {
    const trimmedDescQuery = descriptionQuery.toLocaleLowerCase();
      return photos.filter(photo => photo.description
                    .toLocaleLowerCase()
                    .includes(trimmedDescQuery));
    } else {
      return photos;
    }
  }
}
