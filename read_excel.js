const XLSX = require('xlsx');
const fs = require('fs');

function readExcel(filePath) {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    return XLSX.utils.sheet_to_json(worksheet);
}

try {
    const sitemapErrors = readExcel('/Users/heni/Desktop/sitemap.xlsx');
    const fourxxErrors = readExcel('/Users/heni/Desktop/4xx errors.xlsx');

    console.log("Sitemap Errors:", JSON.stringify(sitemapErrors, null, 2));
    console.log("\n4XX Errors:", JSON.stringify(fourxxErrors, null, 2));

    fs.writeFileSync('/Users/heni/GEO/sitemap_errors.json', JSON.stringify(sitemapErrors, null, 2));
    fs.writeFileSync('/Users/heni/GEO/fourxx_errors.json', JSON.stringify(fourxxErrors, null, 2));
} catch (error) {
    console.error("Error reading Excel files:", error);
}