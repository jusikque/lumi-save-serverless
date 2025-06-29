import { VercelRequest, VercelResponse } from '@vercel/node';
import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { 항목명, 구분, 내용, 확장일, 태그, 버전 } = req.body;

  try {
    const response = await notion.pages.create({
      parent: { database_id: process.env.NOTION_DB_ID },
      properties: {
        '항목명': { title: [{ text: { content: 항목명 } }] },
        '구분': { select: { name: 구분 } },
        '내용': { rich_text: [{ text: { content: 내용 } }] },
        '확장일': { date: { start: 확장일 } },
        '태그': { multi_select: 태그.map((name: string) => ({ name })) },
        '버전': { rich_text: [{ text: { content: 버전 } }] }
      }
    });

    res.status(200).json({ message: 'Success', notion_response: response });
  } catch (error: any) {
    console.error(error.body || error);
    res.status(500).json({ error: 'Notion 저장 실패', detail: error.body || error });
  }
}
