import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor() { }

  uploadFile(file) {
    const contentType = file.type;
    const bucket = new S3({
      accessKeyId: '',
      secretAccessKey: '',
      region: 'us-east-2'
    });
    const params = {
      Bucket: 'songcollectionbucket',
      Key: file.name,
      Body: file,
      ACL: 'public-read',
      ContentType: contentType
    }
    bucket.upload(params, function(err, data) {
      if (err) {
        console.log('There was an error uploading the file: ', err);
        return false;
      }
      console.log('Successfully uploaded file.', data);
      return true;
    });
  }

}
