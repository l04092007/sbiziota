
module.exports.config = {
    name: "tikfeed",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "lấy video trên tiktok của người đó",
    commandCategory: "Phương tiện",
    usages: "[nội dung tin nhắn]",
    cooldowns: 5
};

module.exports.handleReply = async function ({ args, event,Users, api, handleReply, Currencies }) {
  var {data} = handleReply;
  const { threadID, messageID, senderID } = event;
  const axios = global.nodemodule['axios']; 
  const fs = global.nodemodule["fs-extra"];
    switch (handleReply.type) {
        case "choose": {
              
              //const choose = event.body
              const choose = parseInt(event.body);
              if (isNaN(choose)) return api.sendMessage("⚡️Vui lòng nhập 1 con số", threadID);
              const dataTiktok = data.data;
              const dataVideo = dataTiktok.items
              const lengthData = dataVideo.length
              const dataChoose = dataTiktok.items[choose - 1]
              const video = dataChoose.video.playAddr[2]
              if (choose > lengthData || choose < 1) return api.sendMessage("⚡️Lựa chọn không nằm trong danh sách.", threadID)
              path1 = __dirname+`/cache/${event.senderID}.mp4`  
              const getms = (await axios.get(video,{responseType: "arraybuffer"})).data; 
              fs.writeFileSync(path1, Buffer.from(getms, "utf-8"));
                
              if (fs.statSync(__dirname + `/cache/${event.senderID}.mp4`).size > 26000000) return api.sendMessage('⚡Không thể gửi file vì dung lượng lớn hơn 25MB.', event.threadID, () => unlinkSync(__dirname + `/cache/${event.senderID}.mp4`), event.messageID);
              else api.unsendMessage(handleReply.messageID);
              return api.sendMessage({body : "" , attachment: fs.createReadStream(__dirname + `/cache/${event.senderID}.mp4`)}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/${event.senderID}.mp4`), event.messageID)
        //const choosee = parseInt(event.body);
        }
        
    }
}

module.exports.run = async function ({ api, event, args, utils  })  {
const axios = global.nodemodule['axios'];  
if (!args[0]){ return api.sendMessage("⚡Bạn phải nhập username tik tok", event.threadID, event.messageID);}
const userName = args[0]

var options = {
  method: 'GET',
  url: 'https://tik-tok-feed.p.rapidapi.com/',
  params: {search: `${userName}`, type: 'user-feed-no-watermark', max: '0'},
  headers: {
    'x-rapidapi-host': 'tik-tok-feed.p.rapidapi.com',
    'x-rapidapi-key': 'a012e05802msh4ce48bff26d5c0ap151d85jsn4edde7f89de0'
  }
};

  var data = await axios.request(options)
  console.log(data.data);
  const dataTiktok = data.data;
  const dataVideo = dataTiktok.items
  const lengthData = dataVideo.length
  
  // if ( lengthData > 5 ) { 
  //   const video0 = dataTiktok.items[0]
  //   const stt0 = video0.desc
  //   const name0 = video0.author.nickname
  //   const img0 = video0.video.cover
  //   let Avatar = (await axios.get(`${img0}` , { responseType: "arraybuffer" } )).data; 
  //           fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(Avatar, "utf-8") );

  //   const video1 = dataTiktok.items[1]
  //   const stt1 = video1.desc
  //   const name1 = video1.author.nickname
  //   const img1 = video1.video.cover
  //   let Avatar = (await axios.get(`${img1}` , { responseType: "arraybuffer" } )).data; 
  //           fs.writeFileSync( __dirname + "/cache/avt1.png", Buffer.from(Avatar, "utf-8") );

  //   const video2 = dataTiktok.items[2]
  //   const stt2 = video2.desc
  //   const name2 = video2.author.nickname
  //   const img2 = video2.video.cover   
  //   let Avatar = (await axios.get(`${img2}` , { responseType: "arraybuffer" } )).data; 
  //           fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar, "utf-8") );

  //   const video3 = dataTiktok.items[3]
  //   const stt3 = video3.desc
  //   const name3 = video3.author.nickname
  //   const img3= video3.video.cover  
  //   let Avatar = (await axios.get(`${img3}` , { responseType: "arraybuffer" } )).data; 
  //           fs.writeFileSync( __dirname + "/cache/avt3.png", Buffer.from(Avatar, "utf-8") );

  //   const video4 = dataTiktok.items[4]
  //   const stt4 = video4.desc
  //   const name4 = video4.author.nickname
  //   const img4 = video4.video.cover   
  //   let Avatar = (await axios.get(`${img4}` , { responseType: "arraybuffer" } )).data; 
  //           fs.writeFileSync( __dirname + "/cache/avt4.png", Buffer.from(Avatar, "utf-8") );
  //    var imglove = [];
  //             imglove.push(fs.createReadStream(__dirname + "/cache/avt.png"));
  //             imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
  //             imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
  //             imglove.push(fs.createReadStream(__dirname + "/cache/avt3.png"));
  //             imglove.push(fs.createReadStream(__dirname + "/cache/avt4.png"));
  //       var msg = {body: `Hiện đang có ${lengthData} video và feelings được tìm thấy trên user này\n\n1/ ${stt0}\n2/ ${stt1}\n${stt2}\n${stt3}\n${stt4}\n\nVui lòng reply số thứ tự video để xem!!!`, attachment: imglove}
  //       return api.sendMessage(msg, event.threadID, event.messageID, event.threadID, (error, info) => {       
  //           global.client.handleReply.push({
  //               type: "choose",
  //               name: this.config.name,
  //               author: event.senderID,
  //               messageID: info.messageID,
  //               data: data
  //           })
  //       })
  // }
  // else 
  return api.sendMessage(`Hiện đang có ${lengthData} video và feelings được tìm thấy trên user này\nVui lòng reply số thứ tự video để xem!!!`, event.threadID, (error, info) => {       
            global.client.handleReply.push({
                type: "choose",
                name: this.config.name,
                author: event.senderID,
                messageID: info.messageID,
                data: data
            })
        })
}