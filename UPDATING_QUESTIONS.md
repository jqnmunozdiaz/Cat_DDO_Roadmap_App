# Updating Questions from Excel Template

## Overview

This guide will help you update the application's questions based on your `template.xlsx` file containing yes-no questions.

## Steps to Update Questions

### Option 1: Manual Update (Recommended for Understanding Structure)

1. **Open the Excel file** `template .xlsx` and review the structure of your questions

2. **Open the questions data file**:
   ```
   lib/pillarsData.ts
   ```

3. **Update the structure** following this format:

```typescript
{
  id: 'pillar-id',
  name: 'Pillar Name',
  description: 'Description of the pillar',
  subPillars: [
    {
      id: 'sub-pillar-id',
      name: 'Sub-Pillar Name',
      description: 'Sub-pillar description',
      questions: [
        { code: 'CODE-1', text: 'Your yes-no question here?' },
        { code: 'CODE-2', text: 'Another yes-no question?' },
        // ... more questions
      ]
    }
  ]
}
```

### Option 2: Convert Excel to TypeScript

If your Excel has a consistent structure, you can:

1. **Export Excel to CSV**:
   - Open `template .xlsx`
   - Save As → CSV format
   - Name it `questions.csv`

2. **Use a conversion script** (create this file as `scripts/convertQuestions.js`):

```javascript
const fs = require('fs');
const csv = require('csv-parser');

// Assuming CSV has columns: Pillar, SubPillar, QuestionCode, QuestionText
const pillars = new Map();

fs.createReadStream('questions.csv')
  .pipe(csv())
  .on('data', (row) => {
    // Group questions by pillar and sub-pillar
    if (!pillars.has(row.Pillar)) {
      pillars.set(row.Pillar, {
        id: row.Pillar.toLowerCase().replace(/\s+/g, '-'),
        name: row.Pillar,
        description: row.PillarDescription || '',
        subPillars: new Map()
      });
    }
    
    const pillar = pillars.get(row.Pillar);
    if (!pillar.subPillars.has(row.SubPillar)) {
      pillar.subPillars.set(row.SubPillar, {
        id: row.SubPillar.toLowerCase().replace(/\s+/g, '-'),
        name: row.SubPillar,
        description: row.SubPillarDescription || '',
        questions: []
      });
    }
    
    const subPillar = pillar.subPillars.get(row.SubPillar);
    subPillar.questions.push({
      code: row.QuestionCode,
      text: row.QuestionText
    });
  })
  .on('end', () => {
    // Convert Maps to Arrays
    const output = Array.from(pillars.values()).map(pillar => ({
      ...pillar,
      subPillars: Array.from(pillar.subPillars.values())
    }));
    
    // Generate TypeScript file
    const tsContent = `export interface Question {
  code: string
  text: string
}

export interface SubPillar {
  id: string
  name: string
  description: string
  questions: Question[]
}

export interface Pillar {
  id: string
  name: string
  description: string
  subPillars: SubPillar[]
}

export const pillarsData: Pillar[] = ${JSON.stringify(output, null, 2)}

export function getPillarById(id: string): Pillar | undefined {
  return pillarsData.find(p => p.id === id)
}

export function getAllQuestions(): Question[] {
  const questions: Question[] = []
  pillarsData.forEach(pillar => {
    pillar.subPillars.forEach(subPillar => {
      questions.push(...subPillar.questions)
    })
  })
  return questions
}
`;
    
    fs.writeFileSync('lib/pillarsData.ts', tsContent);
    console.log('Questions updated successfully!');
  });
```

3. **Run the conversion**:
```powershell
npm install csv-parser
node scripts/convertQuestions.js
```

## Expected Excel Structure

Your Excel template should have these columns (or similar):

| Pillar | SubPillar | QuestionCode | QuestionText |
|--------|-----------|--------------|--------------|
| Legal and Institutional Framework | Legal Framework | LI-1-1 | Is there a comprehensive DRM law? |
| Legal and Institutional Framework | Legal Framework | LI-1-2 | Does the framework define responsibilities? |

## Current Question Structure

The app currently expects:
- **6 Pillars** (main categories)
- Each pillar has **Sub-Pillars** (subcategories)
- Each sub-pillar has **Questions** (yes-no format)
- Each question has:
  - `code`: Unique identifier (e.g., "LI-1-1")
  - `text`: The actual question text

## Testing After Update

1. **Start the development server**:
   ```powershell
   npm run dev
   ```

2. **Check that**:
   - All pillars appear on the home page
   - Questions load correctly when you click on a pillar
   - Yes/No responses are saved properly
   - Results page shows the correct number of questions

## Tips

- Keep question codes unique across all pillars
- Make sure all questions end with a question mark for consistency
- Test with a few questions first before updating everything
- Back up `lib/pillarsData.ts` before making changes

## Need Help?

If you share the structure of your Excel file (column names and a few sample rows), I can provide a more specific conversion script or help update the questions directly.
