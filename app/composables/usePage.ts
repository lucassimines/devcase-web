import type { Page } from '~/types/page'

export async function usePage(slug: string) {
  const page = useState<Page | null>(`page-${slug}`, () => null)

  return {
    page
  }
}
