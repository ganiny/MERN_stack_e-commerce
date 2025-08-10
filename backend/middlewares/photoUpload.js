const multer = require("multer");

// Photo Storage (memory for serverless)
const photoStorage = multer.memoryStorage();

// Photo Upload Middleware
module.exports.photoUpload = multer({
  storage: photoStorage,
  fileFilter: function (req, file, cb) {
    if (file.mimetype.startsWith("image")) {
      cb(null, true);
    } else {
      cb({ message: "Unsupported file format" }, false);
    }
  },
  limits: { fileSize: 1024 * 1024 }, // 1 megabyte
}).single("image"); // Upload one image only
