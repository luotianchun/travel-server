const express = require("express");

const router = express.Router();

const { handlePublicMessage, testService } = require("../service/travel/index");
const { getFile } = require("../utils/initCos");

router.get("/test/a/", async (req, res) => {
  testService();
  res.status(201).send({
    code: 0,
    data: 222,
  });
});

router.post("/public", async (req, res) => {
  console.log("消息推送", req.body);
  const result = await handlePublicMessage(req.body);
  res.send(result); // 不进行任何回复，直接返回success，告知微信服务器已经正常收到。
});

router.get("/file", async (req, res) => {
  const { fileid } = req.query;
  if (fileid != null && fileid.indexOf("cloud://") === 0) {
    const filePath = fileid.replace(
      /cloud:\/\/.{6,}.[0-9]*-.{6,}-[0-9]*\//,
      "/"
    ); // 将fileid处理一下，COS-SDK只需要目录

    res.send(await getFile(filePath, filePath));
  } else {
    return {
      code: -1,
      msg: "fileid缺失或者格式不正确！",
    };
  }
});

module.exports = {
  travelRouter: router,
};
