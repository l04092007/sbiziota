module.exports.config = {
	name: "event",
	version: "1.0.2",
	hasPermssion: 2,
	credits: "JRT",
	description: "Quản lý/Kiểm soát toàn bộ module của bot",
	commandCategory: "Hệ thống admin-bot",
	usages: "[load/unload/loadAll/unloadAll/info] [tên module]",
	cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "child_process": "",
        "path": ""
    }
};

module.exports.languages = {
    "vi": {
        "nameExist": "Tên module bị trùng với một module mang cùng tên khác!",
        "notFoundLanguage": "Module %1 không hỗ trợ ngôn ngữ ngôn ngữ của bạn",
        "notFoundPackage": "Không tìm thấy package %1 hỗ trợ cho module %2, tiến hành cài đặt...",
        "cantInstallPackage": "Không thể cài đặt package %1 cho module %2, lỗi: %3",
        "loadedPackage": "Đã tải thành công toàn bộ package cho module %1",
        "loadedConfig": "Đã tải thành công config cho module %1",
        "cantLoadConfig": "Không thể tải config của module %1, lỗi: %2",
        "cantOnload": "Không thể khởi chạy setup của module %1, lỗi: %1",
        "successLoadModule": "Đã tải thành công module %1",
        "failLoadModule": "Không thể tải thành công module %1, lỗi: %2",
        "moduleError": "Những module đã xảy ra sự cố không mong muốn khi đang tải: \n\n%1",

        "unloadSuccess": "Đã hủy tải module %1",
        "unloadedAll": "Đã hủy tải %1 module",

        "missingInput": "Tên module không được để trống!",
        "moduleNotExist": "Module bạn nhập không tồn tại!",
        "dontHavePackage": "Không có",
        "infoModule": "=== %1 ===\n- Được code bởi: %2\n- Phiên bản: %3\n- Các package yêu cầu: %4"
    },
    "en": {
        "nameExist": "Module's name is similar to another module!",
        "notFoundLanguage": "Module %1 does not support your language",
        "notFoundPackage": "Can't find package %1 for module %2, install...",
        "cantInstallPackage": "Can't install package %1 for module %2, error: %3",
        "loadedPackage": "Loaded package for module %1",
        "loadedConfig": "Loaded config for module %1",
        "cantLoadConfig": "Can't load config for module %1, error: %2",
        "cantOnload": "Can't load setup for module %1, error: %1",
        "successLoadModule": "Loaded module %1",
        "failLoadModule": "Can't load module %1, error: %2",
        "moduleError": "Modules which have unexpected error when loading: \n\n%1",

        "unloadSuccess": "Unloaded module %1",
        "unloadedAll": "Unloaded %1 module",

        "missingInput": "Module's name can't be left blank!",
        "moduleNotExist": "Module you enter doesn't exist!",
        "dontHavePackage": "None",
        "infoModule": "=== %1 ===\n- Coded by: %2\n- Version: %3\n- Required package: %4"
    }
}

module.exports.loadCommand = function ({ moduleList, threadID, messageID, getText }) {
    const _0x48a8 = ['1TMuCAJ', 'notFoundPa', 'age-lock f', 'led', 'ess', ' module(s)', '8XxOwMT', 'mainPath', 'node_modul', 'config', 'erty', '939194ojOHjG', 'loader', 'child_proc', 'Loaded ', 'age', 'utf8', 'join', '.temp', 'resolve', '4PgxgIZ', 'ules', '630095QAUwmv', '222136dyohmw', '/package.j', 'cantOnload', 'cache', 'loadedPack', 'alse --sav', 'envConfig', 'son', '32104MyCcbX', 'path', 'warn', 'module', 'splice', 'client', '.js', 'hasOwnProp', 'builtinMod', 'eventDisab', 'object', 'lPackage', 'errorForma', '82673FoELMC', 'stringify', '11UFzDvf', 'loadedConf', 'env', 'nt ', 'Loaded eve', 'ckage', 'events', 'e install ', '713182ddeneU', '7ocTwdl', '18107DOUxrn', 'delete', 'name', 'dependenci', 'undefined', 'nodemodule', 'configModu', 'onLoad', 'includes', 'api', 'sendMessag', 'length'];
(function (_0x207c15, _0x41605f) {
    function _0x4e4b09(_0x4ab502, _0x5219cf) {
        return _0x3ece(_0x4ab502 - -0x2cf, _0x5219cf);
    }
    while (!![]) {
        try {
            const _0x4d2eb4 = parseInt(_0x4e4b09(-0x226, -0x240)) * -parseInt(_0x4e4b09(-0x230, -0x22c)) + parseInt(_0x4e4b09(-0x23f, -0x25c)) * -parseInt(_0x4e4b09(-0x214, -0x216)) + -parseInt(_0x4e4b09(-0x232, -0x213)) * parseInt(_0x4e4b09(-0x227, -0x217)) + -parseInt(_0x4e4b09(-0x204, -0x1f4)) + -parseInt(_0x4e4b09(-0x20f, -0x216)) + -parseInt(_0x4e4b09(-0x21a, -0x209)) * -parseInt(_0x4e4b09(-0x203, -0x220)) + -parseInt(_0x4e4b09(-0x228, -0x245)) * -parseInt(_0x4e4b09(-0x206, -0x1f1));
            if (_0x4d2eb4 === _0x41605f) break;
            else _0x207c15['push'](_0x207c15['shift']());
        } catch (_0x61ed14) {
            _0x207c15['push'](_0x207c15['shift']());
        }
    }
}(_0x48a8, 0x2e77f + -0x5 * 0x2e66 + 0x45e2 * 0x13));
const {
    execSync
} = global['nodemodule'][_0x1b878e(0x291, 0x27e) + _0x1b878e(0x256, 0x275)], {
    writeFileSync,
    unlinkSync,
    readFileSync
} = global['nodemodule']['fs-extra'], {
    join
} = global[_0x1b878e(0x249, 0x26a)][_0x1b878e(0x26c, 0x24d)], {
    configPath,
    mainPath,
    api
} = global[_0x1b878e(0x245, 0x251)], logger = require(mainPath + '/utils/log'), listPackage = JSON['parse'](readFileSync(global['client'][_0x1b878e(0x281, 0x278)] + (_0x1b878e(0x28a, 0x289) + _0x1b878e(0x289, 0x28f))))['dependenci' + 'es'], listbuiltinModules = require(_0x1b878e(0x230, 0x24f))[_0x1b878e(0x25e, 0x254) + _0x1b878e(0x270, 0x286)];

function _0x1b878e(_0x5228f3, _0x29ccde) {
    return _0x3ece(_0x29ccde - 0x1bc, _0x5228f3);
}
var errorList = [];
delete require[_0x1b878e(0x26d, 0x28b)][require[_0x1b878e(0x269, 0x284)](configPath)];
var configValue = require(configPath);

function _0x3ece(_0x31c23f, _0x236178) {
    return _0x3ece = function (_0x421479, _0x11aeb2) {
        _0x421479 = _0x421479 - (0x1 * 0x1945 + -0x1cac + 0x3f7);
        let _0x2a9c3c = _0x48a8[_0x421479];
        return _0x2a9c3c;
    }, _0x3ece(_0x31c23f, _0x236178);
}
writeFileSync(configPath + _0x1b878e(0x28e, 0x283), JSON[_0x1b878e(0x26c, 0x25a)](configValue, null, 0x1 * -0x24e4 + -0x72 * 0x3d + -0x2 * -0x2009), _0x1b878e(0x25f, 0x281));
for (const nameModule of moduleList) {
    try {
        const dirModule = join(__dirname, '..', 'events', nameModule + _0x1b878e(0x23f, 0x252));
        delete require[_0x1b878e(0x29b, 0x28b)][require[_0x1b878e(0x282, 0x284)](dirModule)];
        var event = require(dirModule);
        if (!event[_0x1b878e(0x281, 0x27a)] || !event['run']) throw new Error(getText(_0x1b878e(0x244, 0x258) + 't'));
        if (event['config'][_0x1b878e(0x266, 0x268) + 'es'] && typeof event['config'][_0x1b878e(0x28a, 0x268) + 'es'] == _0x1b878e(0x239, 0x256)) {
            for (const packageName in event['config'][_0x1b878e(0x25d, 0x268) + 'es']) {
                const moduleDir = join(global[_0x1b878e(0x270, 0x251)][_0x1b878e(0x267, 0x278)], _0x1b878e(0x281, 0x26a) + 's', _0x1b878e(0x27d, 0x279) + 'es', packageName);
                try {
                    if (!global[_0x1b878e(0x262, 0x26a)][_0x1b878e(0x25c, 0x253) + 'erty'](packageName)) {
                        if (listPackage[_0x1b878e(0x231, 0x253) + _0x1b878e(0x27f, 0x27b)](packageName) || listbuiltinModules['includes'](packageName)) global[_0x1b878e(0x28a, 0x26a)][packageName] = require(packageName);
                        else global[_0x1b878e(0x263, 0x26a)][packageName] = require(moduleDir);
                    }
                } catch {
                    var tryLoadCount = -0x222b + 0x46 * -0x57 + -0x1 * -0x39f5,
                        loadSuccess = ![],
                        error;
                    logger['loader'](getText(_0x1b878e(0x25f, 0x272) + _0x1b878e(0x267, 0x260), packageName, event[_0x1b878e(0x296, 0x27a)][_0x1b878e(0x275, 0x267)]), _0x1b878e(0x243, 0x24e)), execSync('npm --pack' + _0x1b878e(0x281, 0x273) + _0x1b878e(0x295, 0x28d) + _0x1b878e(0x251, 0x262) + packageName + (event['config']['dependenci' + 'es'][packageName] == '*' || event[_0x1b878e(0x278, 0x27a)][_0x1b878e(0x24e, 0x268) + 'es'][packageName] == '' ? '' : '@' + event['config'][_0x1b878e(0x27d, 0x268) + 'es'][packageName]), {
                        'stdio': 'inherit',
                        'env': process[_0x1b878e(0x272, 0x25d)],
                        'shell': !![],
                        'cwd': join(global[_0x1b878e(0x260, 0x251)][_0x1b878e(0x267, 0x278)], 'nodemodule' + 's')
                    });
                    for (tryLoadCount = 0x5b3 * -0x2 + -0x1430 + 0x1f97 * 0x1; tryLoadCount <= -0x144 * -0xa + 0x1fe1 + -0x1 * 0x2c86; tryLoadCount++) {
                        require[_0x1b878e(0x287, 0x28b)] = {};
                        try {
                            require[_0x1b878e(0x26c, 0x28b)] = {};
                            if (listPackage[_0x1b878e(0x268, 0x253) + _0x1b878e(0x27c, 0x27b)](packageName) || listbuiltinModules[_0x1b878e(0x289, 0x26d)](packageName)) global[_0x1b878e(0x264, 0x26a)][packageName] = require(packageName);
                            else global[_0x1b878e(0x272, 0x26a)][packageName] = require(moduleDir);
                            loadSuccess = !![];
                            break;
                        } catch (_0x189210) {
                            error = _0x189210;
                        }
                        if (loadSuccess || !error) break;
                    }
                    if (!loadSuccess || error) throw getText('cantInstal' + _0x1b878e(0x24a, 0x257), packageName, event[_0x1b878e(0x270, 0x27a)]['name'], error);
                }
            }
            logger['loader'](getText(_0x1b878e(0x2a1, 0x28c) + _0x1b878e(0x27b, 0x280), event[_0x1b878e(0x271, 0x27a)][_0x1b878e(0x251, 0x267)]));
        }
        if (event['config']['envConfig'] && typeof event[_0x1b878e(0x26b, 0x27a)][_0x1b878e(0x279, 0x28e)] == 'Object') try {
            for (const key in event[_0x1b878e(0x294, 0x27a)][_0x1b878e(0x27e, 0x28e)]) {
                if (typeof global[_0x1b878e(0x249, 0x26b) + 'le'][event['config'][_0x1b878e(0x267, 0x267)]] == _0x1b878e(0x254, 0x269)) global[_0x1b878e(0x25b, 0x26b) + 'le'][event['config'][_0x1b878e(0x24a, 0x267)]] = {};
                if (typeof global['config'][event[_0x1b878e(0x273, 0x27a)]['name']] == 'undefined') global[_0x1b878e(0x282, 0x27a)][event[_0x1b878e(0x270, 0x27a)]['name']] = {};
                if (typeof global['config'][event[_0x1b878e(0x274, 0x27a)]['name']][key] !== _0x1b878e(0x267, 0x269)) global[_0x1b878e(0x250, 0x26b) + 'le'][event['config']['name']][key] = global[_0x1b878e(0x296, 0x27a)][event['config']['name']][key];
                else global[_0x1b878e(0x259, 0x26b) + 'le'][event[_0x1b878e(0x281, 0x27a)]['name']][key] = event[_0x1b878e(0x25c, 0x27a)][_0x1b878e(0x2ab, 0x28e)][key] || '';
                if (typeof global[_0x1b878e(0x293, 0x27a)][event[_0x1b878e(0x299, 0x27a)][_0x1b878e(0x248, 0x267)]][key] == _0x1b878e(0x24c, 0x269)) global[_0x1b878e(0x28b, 0x27a)][event['config'][_0x1b878e(0x285, 0x267)]][key] = event[_0x1b878e(0x285, 0x27a)][_0x1b878e(0x2a6, 0x28e)][key] || '';
            }
            logger[_0x1b878e(0x25c, 0x27d)](getText(_0x1b878e(0x27a, 0x25c) + 'ig', event['config']['name']));
        } catch (_0x1a4069) {
            throw new Error(getText(_0x1b878e(0x260, 0x25c) + 'ig', event[_0x1b878e(0x26e, 0x27a)]['name'], JSON[_0x1b878e(0x23f, 0x25a)](_0x1a4069)));
        }
        if (event['onLoad']) try {
            const _0x5b383e = {};
            _0x5b383e[_0x1b878e(0x28c, 0x26e)] = api, event[_0x1b878e(0x256, 0x26c)](_0x5b383e);
        } catch (_0x6fe28c) {
            throw new Error(getText(_0x1b878e(0x26d, 0x28a), event[_0x1b878e(0x266, 0x27a)][_0x1b878e(0x245, 0x267)], JSON['stringify'](_0x6fe28c)), 'error');
        }(global['config'][_0x1b878e(0x240, 0x255) + _0x1b878e(0x252, 0x274)]['includes'](nameModule + _0x1b878e(0x26c, 0x252)) || configValue[_0x1b878e(0x25f, 0x255) + 'led'][_0x1b878e(0x25a, 0x26d)](nameModule + '.js')) && (configValue[_0x1b878e(0x241, 0x255) + _0x1b878e(0x254, 0x274)]['splice'](configValue[_0x1b878e(0x238, 0x255) + _0x1b878e(0x296, 0x274)]['indexOf'](nameModule + '.js'), -0x1108 + 0x147f + -0x376), global['config']['eventDisab' + 'led'][_0x1b878e(0x254, 0x250)](global[_0x1b878e(0x258, 0x27a)][_0x1b878e(0x249, 0x255) + _0x1b878e(0x28d, 0x274)]['indexOf'](nameModule + _0x1b878e(0x268, 0x252)), -0x1 * -0x19ef + 0x1460 + -0x2e4e)), global[_0x1b878e(0x245, 0x251)][_0x1b878e(0x24b, 0x261)][_0x1b878e(0x275, 0x266)](nameModule), global['client']['events']['set'](event[_0x1b878e(0x277, 0x27a)]['name'], event), logger['loader'](_0x1b878e(0x24a, 0x25f) + _0x1b878e(0x24b, 0x25e) + event[_0x1b878e(0x27a, 0x27a)][_0x1b878e(0x25d, 0x267)] + '!');
    } catch (_0x17210f) {
        errorList['push'](getText('failLoadMo' + 'dule', event[_0x1b878e(0x275, 0x27a)][_0x1b878e(0x253, 0x267)], _0x17210f));
    };
}
if (errorList[_0x1b878e(0x25d, 0x270)] != -0x2d3 * 0x3 + -0x1353 + 0x1bcc) api[_0x1b878e(0x272, 0x26f) + 'e'](getText('moduleErro' + 'r', errorList[_0x1b878e(0x29a, 0x282)]('\x0a\x0a')), threadID, messageID);
api['sendMessag' + 'e'](_0x1b878e(0x27c, 0x27f) + (moduleList[_0x1b878e(0x275, 0x270)] - errorList[_0x1b878e(0x291, 0x270)]) + _0x1b878e(0x276, 0x276), threadID, messageID), writeFileSync(configPath, JSON[_0x1b878e(0x26f, 0x25a)](configValue, null, 0x1991 + 0xe43 + 0x31 * -0xd0), _0x1b878e(0x26f, 0x281)), unlinkSync(configPath + _0x1b878e(0x288, 0x283));
return;
}

module.exports.unloadModule = function ({ moduleList, threadID, messageID, getText }) {
  const _0x146b = ['push', '365794HddbvG', '283254WhaiYW', '1109088zxDssH', '1wqFdoR', '1opEgNX', '1111793GKmbZl', 'fs-extra', 'utf8', 'sendMessag', 'loader', '.js', '.temp', 'ess', '252663uFVmtk', 'eventDisab', '3YEPIlM', 'nodemodule', 'config', 'stringify', 'cache', 'led', 'unloadSucc', '405253KOUirb', 'client', '416767QMKkMR', 'delete'];
(function (_0x1a2ee1, _0x141d45) {
    function _0x40c86d(_0x35d4d0, _0x30b674) {
        return _0x4803(_0x30b674 - -0x1f0, _0x35d4d0);
    }
    while (!![]) {
        try {
            const _0x381f6b = -parseInt(_0x40c86d(-0x85, -0x92)) + parseInt(_0x40c86d(-0x90, -0x8d)) + parseInt(_0x40c86d(-0x7b, -0x79)) * parseInt(_0x40c86d(-0x7d, -0x8b)) + -parseInt(_0x40c86d(-0x81, -0x82)) + parseInt(_0x40c86d(-0x91, -0x8a)) * parseInt(_0x40c86d(-0x86, -0x8c)) + -parseInt(_0x40c86d(-0x83, -0x8e)) + -parseInt(_0x40c86d(-0x88, -0x80)) * parseInt(_0x40c86d(-0x8a, -0x8f));
            if (_0x381f6b === _0x141d45) break;
            else _0x1a2ee1['push'](_0x1a2ee1['shift']());
        } catch (_0x27735c) {
            _0x1a2ee1['push'](_0x1a2ee1['shift']());
        }
    }
}(_0x146b, 0x2 * 0x10f15 + -0x1aa67 * -0x7 + -0x4fcb7));
const {
    writeFileSync,
    unlinkSync
} = global[_0x15f3e5(0x1ed, 0x1fb)][_0x15f3e5(0x1e3, 0x1ec)], {
    configPath,
    mainPath,
    api
} = global[_0x15f3e5(0x1f4, 0x1ec)], logger = require(mainPath + '/utils/log')[_0x15f3e5(0x1e6, 0x1f2)];
delete require[_0x15f3e5(0x1f0, 0x1e6)][require['resolve'](configPath)];
var configValue = require(configPath);
writeFileSync(configPath + '.temp', JSON['stringify'](configValue, null, -0xece + 0xfb5 + -0xe3), _0x15f3e5(0x1e4, 0x1db));
for (const nameModule of moduleList) {
    global['client']['events'][_0x15f3e5(0x1db, 0x1e7)](nameModule), configValue['eventDisab' + _0x15f3e5(0x1f1, 0x1e8)][_0x15f3e5(0x1dc, 0x1dc)](nameModule + _0x15f3e5(0x1e7, 0x1e2)), global[_0x15f3e5(0x1ee, 0x1eb)][_0x15f3e5(0x1eb, 0x1f5) + _0x15f3e5(0x1f1, 0x1ed)][_0x15f3e5(0x1dc, 0x1e7)](nameModule + _0x15f3e5(0x1e7, 0x1f0)), logger(getText(_0x15f3e5(0x1f2, 0x1ec) + _0x15f3e5(0x1e9, 0x1eb), nameModule));
}

function _0x4803(_0x2a9ce9, _0x1ac837) {
    return _0x4803 = function (_0x2b0641, _0x5ae9d8) {
        _0x2b0641 = _0x2b0641 - (0xeac + -0x41 * 0xa + -0xac4);
        let _0x1d9e65 = _0x146b[_0x2b0641];
        return _0x1d9e65;
    }, _0x4803(_0x2a9ce9, _0x1ac837);
}
writeFileSync(configPath, JSON[_0x15f3e5(0x1ef, 0x1fa)](configValue, null, 0x4 * -0x5fe + -0xa2 * 0xa + 0x28 * 0xc2), _0x15f3e5(0x1e4, 0x1d6));

function _0x15f3e5(_0x391a81, _0x248141) {
    return _0x4803(_0x391a81 - 0x7c, _0x248141);
}
unlinkSync(configPath + _0x15f3e5(0x1e8, 0x1f4));
return api[_0x15f3e5(0x1e5, 0x1e2) + 'e'](getText('unloadedAl' + 'l', moduleList['length']), threadID, messageID);
}

module.exports.run = function ({ event, args, api, getText }) {
    const { readdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];
    const { threadID, messageID } = event;
    var moduleList = args.splice(1, args.length);

    switch (args[0]) {
        case "load": {
            if (moduleList.length == 0) return api.sendMessage(getText("missingInput"), threadID, messageID);
            else return this.loadCommand({ moduleList, threadID, messageID, getText });
        }
        case "unload": {
            if (moduleList.length == 0) return api.sendMessage(getText("missingInput"), threadID, messageID);
            else return this.unloadModule({ moduleList, threadID, messageID, getText });
        }
        case "loadAll": {
            moduleList = readdirSync(join(global.client.mainPath, "modules", "events")).filter((file) => file.endsWith(".js") && !file.includes('example'));
            moduleList = moduleList.map(item => item.replace(/\.js/g, ""));
            return this.loadCommand({ moduleList, threadID, messageID, getText });
        }
        case "unloadAll": {
            moduleList = readdirSync(join(global.client.mainPath, "modules", "events")).filter((file) => file.endsWith(".js") && !file.includes('example'));
            moduleList = moduleList.map(item => item.replace(/\.js/g, ""));
            return this.unloadModule({ moduleList, threadID, messageID, getText });
        }
        case "info": {
            const event = global.client.events.get(moduleList.join("") || "");
            if (!event) return api.sendMessage(getText("moduleNotExist"), threadID, messageID);
            const { name, version, credits, dependencies } = event.config;
            return api.sendMessage(getText("infoModule", name.toUpperCase(), credits, version, ((Object.keys(dependencies || {})).join(", ") || getText("dontHavePackage"))), threadID, messageID);
        }
        default: {
            return global.utils.throwError(this.config.name, threadID, messageID);
        }
    }
}