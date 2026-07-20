export type BoardPost = {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  docUrl: string;
  embedUrl: string;
  pinned: boolean;
};

const HEADER_ALIASES = {
  id: ["id", "ID", "번호", "slug", "Slug"],
  title: ["title", "Title", "제목"],
  date: ["date", "Date", "날짜", "작성일"],
  category: ["category", "Category", "분류", "카테고리"],
  summary: ["summary", "Summary", "요약", "설명", "소개"],
  docUrl: ["doc_url", "docUrl", "url", "URL", "문서URL", "문서링크", "구글문서", "본문URL"],
  embedUrl: ["embed_url", "embedUrl", "임베드URL", "삽입URL"],
  published: ["published", "Published", "공개", "게시", "노출"],
  pinned: ["pinned", "Pinned", "고정", "상단고정"],
};

function getValue(row: Record<string, string>, aliases: string[]) {
  for (const alias of aliases) {
    const value = row[alias];
    if (value !== undefined && value.trim() !== "") return value.trim();
  }
  return "";
}

function parseCsv(csv: string) {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let insideQuotes = false;

  for (let i = 0; i < csv.length; i += 1) {
    const char = csv[i];
    const next = csv[i + 1];

    if (char === '"' && insideQuotes && next === '"') {
      cell += '"';
      i += 1;
      continue;
    }

    if (char === '"') {
      insideQuotes = !insideQuotes;
      continue;
    }

    if (char === "," && !insideQuotes) {
      row.push(cell);
      cell = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !insideQuotes) {
      if (char === "\r" && next === "\n") i += 1;
      row.push(cell);
      if (row.some((value) => value.trim() !== "")) rows.push(row);
      row = [];
      cell = "";
      continue;
    }

    cell += char;
  }

  row.push(cell);
  if (row.some((value) => value.trim() !== "")) rows.push(row);

  if (rows.length === 0) return [];
  const headers = rows[0].map((header) => header.trim());
  return rows.slice(1).map((values) =>
    headers.reduce<Record<string, string>>((acc, header, index) => {
      acc[header] = values[index]?.trim() ?? "";
      return acc;
    }, {}),
  );
}

function isVisible(value: string) {
  if (!value) return true;
  return !["false", "FALSE", "0", "no", "NO", "n", "N", "비공개", "숨김"].includes(value.trim());
}

function isPinned(value: string) {
  return ["true", "TRUE", "1", "yes", "YES", "y", "Y", "고정"].includes(value.trim());
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9가-힣]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function cleanUrl(value: string) {
  const trimmed = value.trim();
  const markdownMatch = trimmed.match(/\((https:\/\/[^)]+)\)/);
  if (markdownMatch?.[1]) return markdownMatch[1];

  const plainUrlMatch = trimmed.match(/https:\/\/\S+/);
  if (plainUrlMatch?.[0]) return plainUrlMatch[0].replace(/[)\]]$/, "");

  return trimmed;
}

export function toGoogleDocEmbedUrl(url: string) {
  const cleanedUrl = cleanUrl(url);
  if (!cleanedUrl) return "";
  if (cleanedUrl.includes("embedded=true")) return cleanedUrl;

  const publishedDocMatch = cleanedUrl.match(/docs\.google\.com\/document\/d\/e\/([^/]+)\/pub/);
  if (publishedDocMatch?.[1]) {
    return `https://docs.google.com/document/d/e/${publishedDocMatch[1]}/pub?embedded=true`;
  }

  const docMatch = cleanedUrl.match(/docs\.google\.com\/document\/d\/([^/]+)/);
  if (docMatch?.[1]) {
    return `https://docs.google.com/document/d/${docMatch[1]}/pub?embedded=true`;
  }

  return "";
}

function normalizeDate(value: string) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

export async function getBoardPosts(): Promise<BoardPost[]> {
  const csvUrl = process.env.GOOGLE_SHEET_CSV_URL ?? process.env.NEXT_PUBLIC_GOOGLE_SHEET_CSV_URL;
  if (!csvUrl) return [];

  try {
    const response = await fetch(csvUrl, { next: { revalidate: 300 } });
    if (!response.ok) return [];
    const csv = await response.text();

    return parseCsv(csv)
      .filter((row) => isVisible(getValue(row, HEADER_ALIASES.published)))
      .map((row, index) => {
        const title = getValue(row, HEADER_ALIASES.title) || "제목 없음";
        const date = getValue(row, HEADER_ALIASES.date);
        const rawDocUrl = cleanUrl(getValue(row, HEADER_ALIASES.docUrl));
        const embedUrl = getValue(row, HEADER_ALIASES.embedUrl) || toGoogleDocEmbedUrl(rawDocUrl);
        const id = getValue(row, HEADER_ALIASES.id) || slugify(`${date}-${title}`) || String(index + 1);

        return {
          id,
          title,
          date: normalizeDate(date),
          category: getValue(row, HEADER_ALIASES.category) || "소식",
          summary: getValue(row, HEADER_ALIASES.summary) || "자세한 내용은 본문 문서에서 확인해 주세요.",
          docUrl: rawDocUrl,
          embedUrl,
          pinned: isPinned(getValue(row, HEADER_ALIASES.pinned)),
        };
      })
      .sort((a, b) => {
        if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;
        return b.date.localeCompare(a.date);
      });
  } catch {
    return [];
  }
}

export async function getBoardPost(id: string) {
  const posts = await getBoardPosts();
  return posts.find((post) => post.id === id);
}
