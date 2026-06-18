import type { Bootstrap } from '~/types/bootstrap'

export function useBootstrap() {
  const bootstrap = useState<Bootstrap | null>('bootstrap', () => null)

  interface SocialMedia {
    name: string
    url: string
    icon: string
  }

  const socialMedias: SocialMedia[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/lucassimines',
      icon: 'uil:github'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/lucassimines/',
      icon: 'uil:linkedin'
    }
  ]

  const navigationState = useState('navigation-state', () => false)

  function openNavigation() {
    navigationState.value = true
  }

  function closeNavigation() {
    navigationState.value = false
  }

  return {
    bootstrap,
    socialMedias,
    navigationState,
    openNavigation,
    closeNavigation
  }
}
