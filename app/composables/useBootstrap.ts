import type { Bootstrap } from '~/types/bootstrap'

export function useBootstrap() {
  const bootstrap = useState<Bootstrap | null>('bootstrap', () => null)

  return {
    bootstrap
  }
}
