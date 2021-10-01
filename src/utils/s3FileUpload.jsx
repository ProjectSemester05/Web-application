import S3FileUpload from 'react-s3';
import {s3Config} from '../config/config';

console.log(s3Config)
export const uploadImage = async (file) => {
    try{
        let result = await S3FileUpload.uploadFile(file, s3Config)
        return {result:result, success: true}
    }
    catch(error){
        return {error:error, success: false}
    }

}