
//para conectar a aws o clud 

// module.exports = ({ env }) => ({
//     // ...
//     upload: {
//       config: {
//         provider: 'aws-s3',
//         providerOptions: {
//           accessKeyId: env('AWS_ACCESS_KEY_ID'),
//           secretAccessKey: env('AWS_ACCESS_SECRET'),
//           region: env('sa-east-1'),//region del servidor sera brasio de san publo que es mar cerca a Perú 
//           params: {
//             Bucket: env('AWS_BUCKET'),//nombre del backet
//           },
//         },
//       },
//     },
//     // ...
//   });

//conexion temporal al servidor local 
//path: ./config/plugins.js

module.exports = ({ env })=>({
    upload: {
      config: {
        providerOptions: {
          localServer: {
            maxage: 300000
          },
        },
      },
    },
  });
  