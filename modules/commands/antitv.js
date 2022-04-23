module.exports.config = {
 name: "antitv",
 version: "1.0.0",
 credits: "D-Jukie",
 hasPermssion: 1,
 description: "Cấm thành viên mới vào nhóm",
 usages: "antitv",
 commandCategory: "Nhóm",
 cooldowns: 0
};

module.exports.run = async({ api, event, Threads}) => {
    const info = await api.getThreadInfo(event.threadID);
    if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) 
      return api.sendMessage('[⚜️] Bot cần quyền quản trị viên nhóm', event.threadID, event.messageID);
    const data = (await Threads.getData(event.threadID)).data || {};
    if (typeof data.newMember == "undefined" || data.newMember == false) data.newMember = true;
    else data.newMember = false;
    await Threads.setData(event.threadID, { data });
      global.data.threadData.set(parseInt(event.threadID), data);
    return api.sendMessage(`[⚜️] Đã ${(data.newMember == true) ? "bật" : "tắt"} thành công antijoin ( chế độ chống trẩu vô box )`, event.threadID, event.messageID);
}