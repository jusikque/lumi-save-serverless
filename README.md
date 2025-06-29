# Lumi Save Engine – Serverless API

자동화된 GPT 구조화 발화를 Notion에 저장하는 서버리스 엔진입니다.  
Vercel에서 실행되며 `/api/save` 엔드포인트를 통해 JSON 데이터를 받아 Notion에 카드로 기록합니다.

## 📦 POST 예시

```json
{
  "항목명": "초입 전략 – 돌파형 대응 기준",
  "구분": "강세장",
  "내용": "강세장 초입은 거래량 급증과 함께 주도 섹터가 형성되는 구간이다.",
  "확장일": "2025-06-29",
  "태그": ["강세장", "초입전략"],
  "버전": "v1.0"
}
```

## 🛠 .env 설정 예시

```
NOTION_API_KEY=your_notion_token
NOTION_DB_ID=your_database_id
PROJECT_DB_MAP={}
```
