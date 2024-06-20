const { S3Client, ListBucketsCommand } = require('@aws-sdk/client-s3');
// const client = require('@aws-sdk/client-s3');
require('dotenv').config();

s3Client = new S3Client({
  region: 'us-east-2',
  credentials: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
  },
});

s3Client
  .send(new ListBucketsCommand())
  .then((res) => {
    console.log(res.Buckets[0]);
  })
  .catch((err) => {
    console.log(err);
  });
// const create = {
//   Bucket: '4937205478432',
//   };

// client
//   .send(new CreateBucketCommand(create))
//   .then((res) => {
//     console.log('S3 RESULT: ', res);
//   })
//   .catch((err) => {
//     console.log('S3_ERROR: ', err);
//   });

module.exports = s3Client;
