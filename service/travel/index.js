// {
//     ToUserName: 'gh_9f25cbe56ff8',
//     FromUserName: 'ob2VN66tLawybpPioQp56iZV7-bg',
//     CreateTime: 1720960950,
//     MsgType: 'text',
//     Content: '你好',
//     MsgId: 24638235016855684
//   }

const handlePublicMessage = async (request)=>{
    try {   
        if(request?.MsgType === "text" && request?.Content==="测试"){
            const { ToUserName, FromUserName, MsgType, Content, CreateTime } = req.body
            return {
                ToUserName: FromUserName,
                FromUserName: ToUserName,
                CreateTime: CreateTime,
                MsgType: 'text',
                Content: '您的行程是，12.31日 从乌鲁木齐到库尔勒'
              }
              
        }
        return "success"
    } catch (error) {
        
    }
}


module.exports={
    handlePublicMessage
}