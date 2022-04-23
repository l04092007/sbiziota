module.exports.config = {
	name: "avtguard",
	version: "1.0.0",
	hasPermssion: 3,
	credits: "NTKhang",
	description: "Bật/tắt khiên avatar bot!",
	commandCategory: "Hệ thống admin-bot",
	cooldowns: 5
};

module.exports. run = async function({ api, event }) {
  const query = args[0];
  if (!query || !['on', 'off'].includes(query)) return api.sendMessage("[⚜] Vui lòng chọn on hoặc off", event.threadID, event.messageID);
  const form = {
    av: api.getCurrentUserID(),
		variables: JSON.stringify({
      "0": {
        is_shielded: query == 'on' ? true : false,
        actor_id: api.getCurrentUserID(),
        client_mutation_id: Math.round(Math.random()*19)
      }
		}),
		doc_id: "1477043292367183"
  };
  
  api.httpPost("https://www.facebook.com/api/graphql/", form, (err, data) => {
    if (err || JSON.parse(data).errors) api.sendMessage("Đã xảy ra lỗi, vui lòng thử lại sau", event.threadID, event.messageID);
    else api.sendMessage(`[⚜] Đã ${query == 'on' ? 'bật' : 'tắt'} khiên avatar của bot thành công`, event.threadID, event.messageID);
  });
};