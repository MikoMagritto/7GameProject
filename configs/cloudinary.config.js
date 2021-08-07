const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
cloudinary.config({
  cloud_name: 'la-chaussette-sale',
  api_key: '566948959326852',
  api_secret: 'LkSm0rt4Li8DdsCBHAxew2chO5o'
});
const storage = new CloudinaryStorage({
  // cloudinary: cloudinary,
  cloudinary,
  params: { // see: https://cloudinary.com/documentation/image_upload_api_reference#optional_parameters
    folder: 'folder-name', // The name of the folder in cloudinary
    allowedFormats: ['jpg', 'png'],
    // resource_type: 'raw', // this is in case you want to upload other type of files, not just images
    public_id: (req, file) => file.originalname // The file on cloudinary would have the same name as the original file name
  }
});
//                        storage: storage
const uploadCloud = multer({ storage });
module.exports = uploadCloud