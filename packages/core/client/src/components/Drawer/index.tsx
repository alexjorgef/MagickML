// DOCUMENTED
import { useFeatureFlagEnabled } from 'posthog-js/react'
import { ProjectWindowProvider } from '../../contexts/ProjectWindowContext'
import { OldSidebar } from './OldSidebar'
import { NewSidebar } from './Newsidebar'

type DrawerProps = {
  children: React.ReactNode
}

/**
 * The main Drawer component that wraps around the application content.
 */
export function Drawer({ children }: DrawerProps): JSX.Element {
  const showSideBarFlag = useFeatureFlagEnabled('ide-new-sidebar')

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      {showSideBarFlag ? (
        <NewSidebar children={children} />
      ) : (
        <OldSidebar children={children} />
      )}
      {children}
    </div>
  )
}

export const DrawerProvider = ({ children }: DrawerProps) => {
  return (
    <ProjectWindowProvider>
      <Drawer> {children}</Drawer>
    </ProjectWindowProvider>
  )
}
