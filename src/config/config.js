export const config = {
    IDENTITY_POOL_ID:process.env.REACT_APP_IDENTITY_POOL_ID,
    REGION: process.env.REACT_APP_REGION, 
    IDENTITY_POOL_REGION: process.env.REACT_APP_IDENTITY_POOL_REGION,
    USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    USER_POOL_WEB_CLIENT: process.env.REACT_APP_USER_POOL_WEB_CLIENT,
    DOMAIN: process.env.REACT_APP_DOMAIN,
    REDIRECT_SIGN_IN: process.env.REACT_APP_REDIRECT_SIGN_IN,
    REDIRECT_SIGN_OUT: process.env.REACT_APP_REDIRECT_SIGN_OUT,
    RESPONSE_TYPE: process.env.REACT_APP_RESPONSE_TYPE,
};


export const s3Config = {
    bucketName: process.env.REACT_APP_BUCKET_NAME,
    region: process.env.REACT_APP_S3_REGION,
    accessKeyId: process.env.REACT_APP_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_S3_SECRET_ACCESS_KEY
}