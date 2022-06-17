import lodash from "lodash";
import {
	roleInfo,weaponInfo
} from "./apps/xiaoyao_image.js"
import {
	rule as adminRule,
	updateRes,
	updateMiaoPlugin
} from "./apps/admin.js";
export {
	updateRes,
	roleInfo,weaponInfo
};


let rule = {
	versionInfo: {
		reg: "^#图鉴版本$",
		describe: "【#帮助】 喵喵版本介绍",
	},
	calendar: {
		reg: "^#图鉴列表$",
		describe: "【#日历】 活动日历",
	},
	roleInfo: {
		reg: "#*(.*)(信息|图鉴|命座|天赋|突破|材料|素材)$", //匹配消息正则，命令正则
		priority: 900, //优先级，越小优先度越高
		describe: "【刻晴信息、刻晴图鉴、刻晴突破、刻晴命座】角色信息图鉴", //【命令】功能说明
	},
	weaponInfo: {
		reg: "", //匹配消息正则，命令正则
		priority: 900, //优先级，越小优先度越高
		describe: "【刻晴信息、刻晴图鉴、刻晴突破、刻晴命座】角色信息图鉴", //【命令】功能说明
	},
	...adminRule
};

lodash.forEach(rule, (r) => {
	r.priority = r.priority || 50;
	r.prehash = true;
	r.hashMark = true;
});

export {
	rule
};

console.log(`图鉴初始化~`);

// setTimeout(async function () {
//   let msgStr = await redis.get("miao:restart-msg");
//   if (msgStr) {
//     let msg = JSON.parse(msgStr);
//     await common.relpyPrivate(msg.qq, msg.msg);
//     await redis.del("miao:restart-msg");
//     let msgs = [`当前版本: ${currentVersion}`, `您可使用 #版本 命令查看更新信息`];
//     await common.relpyPrivate(msg.qq, msgs.join("\n"));
//   }
// }, 1000);