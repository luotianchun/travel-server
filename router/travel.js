const express = require("express");

const router = express.Router();

const { handlePublicMessage } = require("../service/travel/index");

router.get("/test/a/", async (req, res) => {
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

module.exports = {
  travelRouter: router,
};
