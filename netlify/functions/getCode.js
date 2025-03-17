const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
  try {
    const csvPath = path.join(__dirname, '../../public/data/user.csv');
    const csvContent = fs.readFileSync(csvPath, 'utf-8');
    
    const lines = csvContent.split('\n');
    const headers = lines[0].split('\t');
    const data = lines.slice(1).map(line => {
      const [id, code] = line.split('\t');
      return { id, code };
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ data })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: '데이터를 불러오는 중 오류가 발생했습니다.' })
    };
  }
}; 