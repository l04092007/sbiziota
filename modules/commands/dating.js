module.exports.config = {
	name: "dating",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Henry",
	description: "Tìm một người và xem xem có nên hẹn hò với họ không?",
	commandCategory: "Tình yêu",
	usages: "[info/breakup]",
	cooldowns: 5
};

function msgBreakup() {
    var msg = ['Thật sự 2 người không thể làm lành được sao?', 'Cứ như vậy mà buông tay nhau?', 'Không đau sao? Có chứ? Vậy sao còn muốn buông?', 'Vì một lí do nào đó... 2 người có thể cố găng được không? ^^']
    return msg[Math.floor(Math.random() * msg.length)];
}

function getMsg() {
    
    return `Mọi người cùng tới chúc mừng hạnh phúc cho cặp đôi mới này nào 🥰\n\nNotes:\n- Cả 2 bạn sẽ không thể chia tay trong vòng 7 ngày kể từ khi bắt đầu.\n- Tôi sẽ làm việc nhiều hơn, đem lại nhiều điều thú vị hơn về lệnh Dating này để giúp 2 bạn có nhiều niềm vui khi bên nhau hơn.\n- Cuối cùng, cảm ơn đã sử dụng Bot và chúc 2 bạn hạnh phúc 🥰`
}

module.exports.handleReaction = async function({ api, event, Threads, Users, Currencies, handleReaction }) {
    var { threadID, userID, reaction,messageID } = event;
    var { turn } = handleReaction;
    switch (turn) {
        case "match":
            api.unsendMessage(handleReaction.messageID);
            var { senderID, coin, senderInfo, type } = handleReaction;
            if (senderID != userID) return;
            await Currencies.setData(senderID, { money: coin - 20000 });
            var data = await Threads.getInfo(threadID);
            var { userInfo } = data;
            var doituong = [];
            for (var i of userInfo) {
                var uif = await Users.getInfo(i.id);
                var gender = '';
                if (uif.gender == 1) gender = "Nữ";
                if (uif.gender == 2) gender = "Nam"; 
                if (uif.dating && uif.dating.status == true) continue;
                if (gender == type) doituong.push({ ID: i.id, name: uif.name });
            }
            if (doituong.length == 0) return api.sendMessage(`Rất tiếc, không có đối tượng mà bạn cần tìm hoặc họ đều đã hẹn hò với người khác mất rồi ^^`, threadID);
            var random = doituong[Math.floor(Math.random() * doituong.length)];
            var msg = {
                body: `${senderInfo.name} - Người mà hệ thống chọn cho bạn là: ${random.name}\nPhù Hợp: ${Math.floor(Math.random() * (80 - 30) + 30)}%\n\nNếu cả 2 người đồng ý, hãy cùng nhau thả cảm xúc trái tim (❤) vào tin nhắn này để bắt đầu trạng thái Dating.`,
                mentions: [ { tag: random.name, id: random.ID }, { tag: senderInfo.name, id: senderID } ]
            }
            return api.sendMessage(msg, threadID, (error, info) => {
                global.client.handleReaction.push({ name: this.config.name, messageID: info.messageID, turn: "accept", user_1: { ID: senderID, name: senderInfo.name, accept: false }, user_2: { ID: random.ID, name: random.name, accept: false } });
            });
        case "accept":
            var { user_1, user_2 } = handleReaction;
            if (reaction != '❤') return;
            if (userID == user_1.ID) user_1.accept = true;
            if (userID == user_2.ID) user_2.accept = true;
            if (user_1.accept == true && user_2.accept == true) {
                api.unsendMessage(handleReaction.messageID);
                var infoUser_1 = await Users.getData(user_1.ID);
                var infoUser_2 = await Users.getData(user_2.ID);
                infoUser_1.data.dating = { status: true, mates: user_2.ID, time: { origin: Date.now(), fullTime: global.client.getTime('fullTime') } };
                infoUser_2.data.dating = { status: true, mates: user_1.ID, time: { origin: Date.now(), fullTime: global.client.getTime('fullTime') } };
                return api.sendMessage(`Cả 2 người đã cùng nhau thả cảm xúc, đồng nghĩa với việc cả 2 người đều đồng ý tiến tới hẹn hò.`, threadID, async (error, info) => {
                    await Users.setData(user_1.ID, infoUser_1);
                    await Users.setData(user_2.ID, infoUser_2);
                    api.changeNickname(`${user_2.name} - Dating with ${user_1.name}`, threadID, user_2.ID);
                    api.changeNickname(`${user_1.name} - Dating with ${user_2.name}`, threadID, user_1.ID);
                    api.sendMessage(getMsg(), threadID);
                });
            }
            break;
        case 'breakup':
            var { userInfo, userMates, user_1, user_2 } = handleReaction;
            if (userID == user_1.ID) user_1.accept = true;
            if (userID == user_2.ID) user_2.accept = true;
            if (user_1.accept == true && user_2.accept == true) {
                api.unsendMessage(handleReaction.messageID);
                userInfo.data.dating.status = false;
                userMates.data.dating.status = false;
                return api.sendMessage(`Bên nhau vào những lúc giông bão, nhưng lại chẳng thể có nhau vào lúc mưa tan ^^\nĐừng buồn nhé, đôi khi có những lúc hợp rồi lại tan mới khiến bản thân mình mạnh mẽ hơn chứ ^^`, threadID, async () => {
                    await Users.setData(user_1.ID, userInfo);
                    await Users.setData(user_2.ID, userMates);
                    api.changeNickname("", threadID, user_1.ID);
                    api.changeNickname("", threadID, user_2.ID);
                   // khi chia tay nó sẽ xóa biệt danh của 2 người//
                })
            }
            break;
        default:
            break;
    }
}
 
module.exports.run = async function({ api, event, args, Users, Currencies }) {
    var { threadID, messageID, senderID } = event;
    var senderInfo = await Users.getData(senderID);
    var type = ''
    switch (args[0]) {
        case "Nam":
        case "nam":
            if (senderInfo.data.dating && senderInfo.data.dating.status == true) return api.sendMessage(`Muốn cắm sừng người ta hay sao? Đang ở chế độ Dating còn muốn tìm thêm người khác?`, threadID, messageID);
            type = "Nam";
            break;
        case "Nữ":
        case "nữ":
        case "nu":
        case "Nu":
            if (senderInfo.data.dating && senderInfo.data.dating.status == true) return api.sendMessage(`Muốn cắm sừng người ta hay sao? Đang ở chế độ Dating còn muốn tìm thêm người khác?`, threadID, messageID);
            type = "Nữ";
            break;
        case "breakup":
            var userInfo = await Users.getData(senderID);
            if (!userInfo.data.dating || userInfo.data.dating && userInfo.data.dating.status == false) return api.sendMessage(`Bạn chưa hẹn hò với ai thì đòi breakup cái gì?`, threadID, messageID);
            if (Date.now() - userInfo.data.dating.time.origin < 604800000) return api.sendMessage(`Còn chưa đủ 7 ngày mà đã muốn chia tay là sao? 🥺\n\n${msgBreakup()}\n\nHãy cứ bình tĩnh suy nghĩ, để mọi chuyện dần lắng xuống rồi giải quyết cùng nhau. Nhé? ^^`, threadID, messageID);
            var userMates = await Users.getData(userInfo.data.dating.mates);
            return api.sendMessage(`Cả 2 người thật sự không thể tiếp tục được hay sao?\nNếu có đọc được dòng tin nhắn này, hãy cứ để nó đó... Yên lặng một chút, suy nghĩ cho kĩ đi nào...\nCó nhiều thứ... Một khi đã mất đi rồi thì sẽ không thể tìm lại được đâu... ^^\n\nCòn nếu... Vẫn không thể tiếp tục được nữa... Cả 2 người hãy thả cảm xúc vào tin nhắn này nhé...`, threadID, (error, info) => {
                global.client.handleReaction.push({ name: this.config.name, messageID: info.messageID, userInfo: userInfo, userMates: userMates, turn: 'breakup', user_1: { ID: senderID, accept: false }, user_2: { ID: userInfo.data.dating.mates, accept: false } })
            }, messageID);
        case "info":
            var userInfo = await Users.getData(senderID);
            if (!userInfo.data.dating || userInfo.data.dating && userInfo.data.dating.status == false) return api.sendMessage(`Đang ế lòi mồm ra đòi xem thông tin gì vậy?`, threadID, messageID);
            var infoMates = await Users.getData(userInfo.data.dating.mates);
            console.log(userInfo.data.dating.time)
            var fullTime = userInfo.data.dating.time.fullTime;
            console.log(fullTime)
            fullTime = fullTime.match(/[0-9]{2}\/[0-9]{2}\/[0-9]{4}/);
            fullTime = fullTime[0].replace(/\//g, " ").split(' ');
            var date = fullTime[0], month = fullTime[1] - 1, year = fullTime[2];
            var dateNow = global.client.getTime('date'), monthNow = global.client.getTime('month') - 1, yearNow = global.client.getTime('year');
            var date1 = new Date(year, month, date);
            var date2 = new Date(yearNow, monthNow, dateNow);
            var msg = `===『 Trạng thái hẹn hò 』===\n\n` +
            `Tên Của Bạn: ${userInfo.name}\n` +
            `Tên Của Người Ấy: ${infoMates.name}\n` +
            `Thời Gian Bắt Đầu: ${userInfo.data.dating.time.fullTime}\n` +
            `Đã Bên Nhau: ${parseInt((date2 - date1) / 86400000)} ngày\n`
            return api.sendMessage(msg, threadID, messageID);
        default:
            return api.sendMessage(`Bạn cần nhập giới tính của đối tượng mà bạn muốn ghép đôi.`, threadID, messageID);
    }
  
    var { money } = await Currencies.getData(senderID);
    if (money < 20000) return api.sendMessage(`Bạn không đủ 20.000 đô để thực hiện tìm kiếm một đối tượng mới.`, threadID, messageID);
    return api.sendMessage(`Bạn sẽ bị trừ 20000 đô để thực hiện tìm kiếm người ghép đôi với mình.\nSố tiền này sẽ không được hoàn trả nếu 1 trong 2 người không đồng ý tiến vào trạng thái Dating.\n\nThả cảm xúc vào tin nhắn này để đồng ý tìm kiếm một người.`, threadID, (error, info) => {
        global.client.handleReaction.push({ name: this.config.name, messageID: info.messageID, senderID: senderID, senderInfo: senderInfo, type: type, coin: money, turn: 'match' })
    }, messageID);
}