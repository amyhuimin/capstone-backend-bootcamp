const express = require("express");
const router = express.Router();
const { S3Client } = require("@aws-sdk/client-s3");
const { PutObjectCommand } = require("@aws-sdk/client-s3");
const multer = require("multer");
const upload = multer();
const crypto = require("crypto");
const util = require("util");
const randomBytes = util.promisify(crypto.randomBytes);

const s3Client = new S3Client({
  region: "ap-southeast-1",
  credentials: {
    accessKeyId: "AKIASDMQVHSXT2ZO2IBR",
    secretAccessKey: "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",
  },
});

class imageRouter {
  constructor() {
    //this.auth = auth;
  }
  routes() {
    // // we will insert routes into here later on
    // router.get("/", this.auth, this.controller.getAll.bind(this.controller));
    router.post("/", upload.single("file"), async (req, res) => {
      const rawBytes = await randomBytes(16);
      const imageName = rawBytes.toString("hex");

      const params = {
        Bucket: "imagesbucketp3rocket", // The name of the bucket. For example, 'sample_bucket_101'.
        Key: imageName, // The name of the object. For example, 'sample_upload.txt'.
        Body: req.file.buffer, // The content of the object. For example, 'Hello world!".
      };
      const results = await s3Client.send(new PutObjectCommand(params));
      return res.send({
        res: results,
        url: `https://imagesbucketp3rocket.s3.amazonaws.com/${imageName}`,
      });
    });
    return router;
  }
}

module.exports = imageRouter;
