'use strict';

let fs = require('fs');
let CIDR = require('cidr-js');
let cidr = new CIDR();

const CIDR_PATH = './ChinaCIDR.txt';
const XML_PATH = './ChinaCIDR_forProxifier.xml';

const COMBINE_LINES = 500;

let text = fs.readFileSync(CIDR_PATH);
let lines = text.toString().split(/\n/);

let ruleSets = [];
let currentRule = [];

let xmlContent = '';

lines.forEach((t) => {
  if (t.replace(/\s*/,'') !== '') {
    let iprange = cidr.range(t).start + '-' + cidr.range(t).end;
    currentRule.push(iprange);
    if (currentRule.length >= COMBINE_LINES) {
      ruleSets.push(currentRule);
      currentRule = [];
    }
  }
});

if (currentRule.length > 0) {
  ruleSets.push(currentRule);
}

ruleSets.forEach((rules, i) => {
  let label = 'CHINA-IP-' + (i + 1);
  xmlContent += `
  <Rule enabled="true">
    <Name>${label}</Name>
    <Targets>${rules.join(';')}</Targets>
    <Action type="Direct" />
  </Rule>
  `;
});

fs.writeFileSync(XML_PATH, xmlContent);

console.log('All done!');
