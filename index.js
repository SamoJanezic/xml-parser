import { XMLParser } from 'fast-xml-parser';
import { readFileSync } from 'fs';


//xml file from https://learn.microsoft.com/en-us/previous-versions/windows/desktop/ms762271(v=vs.85)
const xmlFile = readFileSync(`${process.cwd()}/xml/izvoz.xml`, 'utf8');
const options = {
    ignoreAttributes: false,
    attributeNamePrefix : "@_",
    attributesGroupName : "@_"
};
const parser = new XMLParser(options);
const json = parser.parse(xmlFile);


console.log(json);