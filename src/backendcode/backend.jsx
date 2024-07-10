// const express = require('express');
// const multer = require('multer');
// const { Storage } = require('@google-cloud/storage');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// app.use(cors());

// const storage = new Storage({
//   keyFilename: process.env.GOOGLE_CLOUD_KEYFILE,
//   projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
// });

// const bucket = storage.bucket(process.env.GOOGLE_CLOUD_BUCKET_NAME);

// const multerStorage = multer.memoryStorage();
// const upload = multer({ storage: multerStorage });

// app.post('/upload', upload.single('file'), (req, res) => {
//   const blob = bucket.file(req.file.originalname);
//   console.log(blob)
//   const blobStream = blob.createWriteStream({
//     resumable: false,
//   });

//   blobStream.on('finish', () => {
//     const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
//     res.status(200).json({ url: publicUrl });
//   });

//   blobStream.end(req.file.buffer);
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));








// GOOGLE_CLOUD_PROJECT_ID=commanding-day-429011-j6
// GOOGLE_CLOUD_KEYFILE=./key.json
// GOOGLE_CLOUD_BUCKET_NAME=not-allow
// PORT=5000














// {
//     "type": "service_account",
//     "project_id": "commanding-day-429011-j6",
//     "private_key_id": "7771f79580801257f0e544db1bb84483031d2922",
//     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCtuGbK4fLCL1H/\nr1Sv9zx9jZipgo6YPQEyj81Wd3GpzsWaZPu4Z9AG506OJheRgLaZfMifynvt9Aid\nVV33Oo5ImtlR5nSZ91D33Y3H7XY/PLvQxKHvgj06pyXv2Owzps9SfAS02Wuot20+\n78cU68HiS74jPviLFH3sSvifsHBp3WnWCBf2hvZArlDO5i6CwYzJR3+tYVx0BSJn\nNhuz3u86qGF39Pz7aCOBHN8htXNNuzalKqbacTkuXZ2YR4iKJCi3WuIKWgm2KwrB\nljuRuMoJII3InQsMzX2OhjBSlldLm6L18da3i+7ZwBHlmY/c8B6dhOVxHrFX7Nih\neqxnGMmRAgMBAAECggEADwMqAutevrA3LljZATHk7NaxNCjfqMFQ2q05qfi9flar\nlemXJTr3a7lOfRNGoyDT5tS1Q7XMWuZlXi9T5PsO87BKCn1XYzzPpvPi/j2Do/hc\nJLDxa5C+ONTb/uuokdge/3pPL8/AMX7UdoVjF2g+Q4+XGVWmReKZ9TMPZEFrnYJL\n4bYAgkboyZvq3tI7lFUVHr1WvNY9QUoHs2Go9Dc6pqXXVRRnj/DZw79o571T8FG+\nJRWnOx8uCQ66r0URl2fSTsldEIoZm9Ci+gDHyvNPtLCMdb7MR95hlXLl0fOvch9M\nIWiOYVAnANqd45uSF4MolA/kcFE9LuzPsyxr3epKJwKBgQDTwli4Rw4oHJMsUuvd\nUJNzGZlh57OZLpBGNx//g4w++z3gS+fm7ESrtK8zkUuiDN6eJTiknDYaT3Od6I8I\nLJ7qkDtymIHyLBjBjGfAteh1lXGmnJNtMO6TPQVPwliH37TABqbF2RdLxqMm7yX9\n1Q5xExsX1PO2zG2QyN5COiQKIwKBgQDSA5k3CVYthA9eTyIN0eSgh/MeJgEzdfHv\nCnwdgVa9c8KO9lFyhrlB2IjaI0NjSyMLUeqgagNKEqh3yZZVzx3J+r/itqgDYhod\ng5KFRGfoJgPgIT7LmHHvoyN6b9qqNOFiDihWghWb0cqBC36ixjb4Lm3ZQzm25KKf\nbNg2/fY2uwKBgQCpCXu+5mGjnWPSPwMvMLHzcFzjLY1NW0Ep+7kcQ4tBf1ceZBlj\nWflbQ6mTtYk1e6Z9gWLc7CG4EPJO/CSpNs1ImwgJazpX8eF1JzpvOAavTjNh950r\nzaK0gEJsL8xx8h6cJvMb/ja9c3wriT2/iUK0+rZm6MP/iOJxcBcTsMuyFwKBgB4H\ni7H18M+jUXs/v3PQbmuR5O6LqqJMHCL9EdA6PUfrtIcyq2S/5N+IcdEXN7yL8t/c\nf7seTYga8OHn/koYyn6mDygAzDdnoKpVtO6/YEgun2E9/7em/auxXRJVyiOKWivm\nMFhmU2arcdRP63Sk+Rk1slldpnQDb0lyi9wZJkqfAoGBAIkw9xYeyluJ4LwKI/Q2\nR6Woedsio8v8Nr4DPF87FeusxWAuwBr2GoCmVw+aaDDa0578XeWgs27SdbQ6SiYr\nmfn/iSNH1ErkW9XRQ91tDcfV9nYDaJ1uA0In5f6mVs/3WxYTCfjOW/+3O94e7tyR\n6a0pGrhuIQnDZ0wKpdNKxJ1l\n-----END PRIVATE KEY-----\n",
//     "client_email": "uploadfilebucked@commanding-day-429011-j6.iam.gserviceaccount.com",
//     "client_id": "113417558226933587824",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/uploadfilebucked%40commanding-day-429011-j6.iam.gserviceaccount.com",
//     "universe_domain": "googleapis.com"
//   }
  
  
