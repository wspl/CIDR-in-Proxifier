# CIDR-in-Proxifier
A script for covering Converting CIDRs list to configuration file segment of Proxifier.
一个用于将 CIDR 列表文件转换为 Proxifier 配置文件片段的脚本。

中国IP段CIDR列表地址：（项目中已自带）
http://www.ipdeny.com/ipblocks/data/aggregated/cn-aggregated.zone


##如何使用

```bash
// 安装 io.js 与 npm
// 根据需求修改 index.js 文件中的 CIDR_PATH 和 XML_PATH 两个常量

$ git clone https://github.com/wspl/CIDR-in-Proxifier.git
$ cd ./CIDR-in-Proxifier
$ npm install
$ iojs ./

// 接着，将生成的 xml 文件中的所有内容复制到 Proxifier 配置文件中的 <RuleList> 节点中。
// PS：Proxifier 配置文件通常在 C:\Users\<用户名>\AppData\Roaming\Proxifier\Profiles

