const fs = require('fs');
const path = require('path');

const homePath = path.join(__dirname, 'src', 'pages', 'Home', 'Home.tsx');
let content = fs.readFileSync(homePath, 'utf8');

const sections = [
  { name: 'HeroSection', comment: '{/* Hero Section */}' },
  { name: 'PartnersSection', comment: '{/* Logo Partners Section */}' },
  { name: 'DiscoverSection', comment: '{/* Discover Section */}' },
  { name: 'CategoriesSection', comment: '{/* Explore Diverse Learning Paths */}' },
  { name: 'GrowthSection', comment: '{/* Professional Growth Section */}' },
  { name: 'InstructorSection', comment: '{/* Create & Manage Courses Section */}' },
  { name: 'CTASection', comment: '{/* CTA Section */}' },
  { name: 'TestimonialsSection', comment: '{/* Testimonials Section */}' },
  { name: 'Footer', comment: '{/* Footer */}' }
];

const imports = `import React from 'react';
import { Link } from 'react-router';
import {
  bytespace_logo,
  avatar_2_b44979e1,
  avatar_3_3fe55918,
  avatar_4_0577f0e9,
  image_16_6be36b89,
  image_17_d5e9c4dc,
  image_13_e3b55902,
  image_343,
  cone_01_1,
  cone_01_2,
  frame_516,
  frame_542,
  frame_568,
  frame_594,
  frame_620,
  frame_646
} from "../../../assets";
import Header from "../../../shared/Header";
import CourseCard from "../../../components/CourseCard";
import CategoryCard from "../../../components/CategoryCard";
import TestimonialCard from "../../../components/TestimonialCard";
`;

let newHomeContent = content;
let importsToAdd = [];

for (let i = 0; i < sections.length; i++) {
  let current = sections[i];
  let next = sections[i + 1];
  
  let startIndex = content.indexOf(current.comment);
  // footer ends at </div before closing main div, which is tricky. 
  // Wait, let's just use next.comment index or the end of the file.
  let endIndex;
  if (next) {
    endIndex = content.indexOf(next.comment);
  } else {
    endIndex = content.lastIndexOf('    </div>');
  }
  
  if (startIndex !== -1 && endIndex !== -1) {
    let sectionCode = content.substring(startIndex, endIndex);
    
    // Replace section with its component in newHomeContent
    newHomeContent = newHomeContent.replace(sectionCode, `      <${current.name} />\n`);
    
    let compPath = path.join(__dirname, 'src', 'pages', 'Home', 'sections', `${current.name}.tsx`);
    let compCode = `${imports}\nexport default function ${current.name}() {\n  return (\n    <>\n      ${sectionCode.trim()}\n    </>\n  );\n}\n`;
    fs.writeFileSync(compPath, compCode);
    
    importsToAdd.push(`import ${current.name} from "./sections/${current.name}";`);
  }
}

newHomeContent = newHomeContent.replace('import Header from "../../shared/Header";', `import Header from "../../shared/Header";\n${importsToAdd.join('\n')}`);

fs.writeFileSync(homePath, newHomeContent);
console.log('Extraction complete!');
