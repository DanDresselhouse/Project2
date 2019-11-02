import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as S3 from 'aws-sdk/clients/s3';
let UploadService = class UploadService {
    constructor() { }
    uploadFile(file) {
        const contentType = file.type;
        const bucket = new S3({
            accessKeyId: 'AKIAUNBRJRRBG5IUQ3XG',
            secretAccessKey: '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',
            region: 'us-east-2'
        });
        const params = {
            Bucket: 'songcollectionbucket',
            Key: file.name,
            Body: file,
            ACL: 'public-read',
            ContentType: contentType
        };
        bucket.upload(params, function (err, data) {
            if (err) {
                console.log('There was an error uploading the file: ', err);
                return false;
            }
            console.log('Successfully uploaded file.', data);
            return true;
        });
    }
};
UploadService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], UploadService);
export { UploadService };
//# sourceMappingURL=upload.service.js.map