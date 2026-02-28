const fs = require('fs');

let html = fs.readFileSync('Landmark.html', 'utf8');

// Extract the <body> content as it contains header, main, footer
const bodyRegex = /<body[^>]*>([\s\S]*?)<\/body>/i;
const match = bodyRegex.exec(html);

if (match) {
    let bodyContent = match[1];

    // Remove the script tag at the end
    bodyContent = bodyContent.replace(/<script>[\s\S]*?<\/script>/gi, '');

    // Convert class to className
    bodyContent = bodyContent.replace(/class=/g, 'className=');
    // Convert for to htmlFor
    bodyContent = bodyContent.replace(/for="/g, 'htmlFor="');

    // Convert onclick to onClick
    bodyContent = bodyContent.replace(/onclick="([^"]+)"/g, (match, p1) => {
        return `onClick={() => { ${p1.replace(/&quot;/g, "'")} }}`;
    });

    // Replace form tag
    bodyContent = bodyContent.replace(/<form\s+id="contactForm"[^>]*>/g, '<form id="contactForm" onSubmit={handleSubmit} className="space-y-6">');

    // Close img, input tags properly without double-closing if already closed
    bodyContent = bodyContent.replace(/<(img|input|hr|br)([^>]*)>/g, (match, tag, attr) => {
        if (attr.endsWith('/')) return match;
        return `<${tag}${attr} />`;
    });

    // Close path tags (SVG elements)
    bodyContent = bodyContent.replace(/<(path)([^>]*)><\/path>/g, '<$1$2 />');

    // Convert SVG attributes
    bodyContent = bodyContent.replace(/stroke-width=/g, 'strokeWidth=');
    bodyContent = bodyContent.replace(/stroke-linecap=/g, 'strokeLinecap=');
    bodyContent = bodyContent.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
    bodyContent = bodyContent.replace(/fetchpriority=/g, 'fetchPriority=');

    // The lucide menu icon
    bodyContent = bodyContent.replace(/<i data-lucide="menu"[^>]*><\/i>/g, '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>');

    // Create the page.tsx content
    const pageTsx = `"use client";

import React from 'react';

export default function Home() {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    if (name?.trim() && phone?.trim() && message?.trim()) {
        alert('Thank you! We will contact you soon.');
        (e.target as HTMLFormElement).reset();
    } else {
        alert('Please fill in all fields.');
    }
  };

  return (
    <>
${bodyContent}
    </>
  );
}
`;

    fs.writeFileSync('src/app/page.tsx', pageTsx);
    console.log("Migration successful");
} else {
    console.log("Failed to find body tag");
}
