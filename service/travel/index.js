// {
//     ToUserName: 'gh_9f25cbe56ff8',
//     FromUserName: 'ob2VN66tLawybpPioQp56iZV7-bg',
//     CreateTime: 1720960950,
//     MsgType: 'text',
//     Content: '你好',
//     MsgId: 24638235016855684
//   }

const testService = async()=>{
    console.log('hello>>>'); //sy-log
}

const handlePublicMessage = async (request)=>{
    try {   
        console.log("处理公众号消息",request,request?.MsgType === "text" && request?.Content==="测试");
        if(request?.MsgType === "text" && request?.Content === "测试"){
            const { ToUserName, FromUserName, MsgType, Content, CreateTime } = request
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
    testService,
    handlePublicMessage
}