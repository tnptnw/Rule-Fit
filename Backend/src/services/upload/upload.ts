import multer from "multer";

const upload = multer({ dest: "images/" });

export { upload };
