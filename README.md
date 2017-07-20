# CIDR-in-Proxifier

A script for coverting CIDRs list to configuration file segment of Proxifier.

一个用于将 CIDR 列表文件转换为 Proxifier 配置文件片段的脚本。


**注意：本项目提供一个配置文件生成脚本，用于让 Proxifier 用户正常地分流国内和境外流量，以确保国内网站的正常访问！**


中国大陆IP段CIDR列表地址：（项目中已自带）

http://www.ipdeny.com/ipblocks/data/aggregated/cn-aggregated.zone


##如何使用

```
// 安装 Node.js 与 npm
// 根据需求修改 index.js 文件中的 CIDR_PATH 和 XML_PATH 两个常量

git clone https://github.com/wspl/CIDR-in-Proxifier.git
cd ./CIDR-in-Proxifier
npm install
npm start

// 接着，将生成的 xml 文件中的所有内容复制到 Proxifier 配置文件中的 <RuleList> 节点中。
// PS：Proxifier 配置文件通常在 C:\Users\<用户名>\AppData\Roaming\Proxifier\Profiles
```
