'use strict';

let fs = require('fs');
let CIDR = require('cidr-js');
let cidr = new CIDR();

const CIDR_PATH = './ChinaCIDR.txt';
const XML_PATH = './ChinaCIDR_forProxifier.xml';

let text = fs.readFileSync(CIDR_PATH);
let lines = text.toString().split(/\n/);

let xmlContent = '';

for (let i = 0; i < lines.length; i += 1) {
  let t = lines[i];
  if(t.replace(/\s*/,'') !== ''){
    let iprange = cidr.range(t).start + '-' + cidr.range(t).end;
    let label = 'IPRANGE-' + (i + 1);
    xmlContent += `
    <Rule enabled="true">
      <Name>${label}</Name>
      <Targets>${iprange}</Targets>
      <Action type="Direct" />
    </Rule>
    `;
  }
}

fs.writeFileSync(XML_PATH, xmlContent);

console.log('All done!');