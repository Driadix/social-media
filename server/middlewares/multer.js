import multer from 'multer';

function multerSetup() {
  const storage = multer.diskStorage({
    destination(req, file, cb) {
      cb(null, 'public/assets');
    },
    filename(req, file, cb) {
      cb(null, file.originalname);
    },
  });
  return storage;
}

const multerMiddleware = {
  upload(file) {
    const upload = multer({ storage: multerSetup() });
    return upload.single(file);
  },
};

export default multerMiddleware;
