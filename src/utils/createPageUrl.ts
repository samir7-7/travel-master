// utils/createPageUrl.ts
export function createPageUrl(page: string, params?: Record<string, string>) {
  if (page === "blog" && params?.slug) {
    return `/blog/${params.slug}`; // ✅ Pretty URL
  }

  if (!params) return `/${page}`;
  const query = new URLSearchParams(params).toString();
  return `/${page}?${query}`;
}
