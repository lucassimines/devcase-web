import type { Bootstrap, SocialMedia } from '~/types/bootstrap'

export function useBootstrap() {
  const bootstrap = useState<Bootstrap | null>('bootstrap', () => null)

  const github: SocialMedia = {
    name: 'GitHub',
    url: 'https://github.com/lucassimines',
    icon: 'uil:github'
  }

  const linkedin: SocialMedia = {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/lucassimines/',
    icon: 'uil:linkedin'
  }

  const socialMedias: SocialMedia[] = [github, linkedin]

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
    github,
    navigationState,
    openNavigation,
    closeNavigation
  }
}
