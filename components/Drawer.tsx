import { drawerWidth } from '@/lib/helpers'
import { Drawer } from '@mui/material'
import React from 'react'

type Props = {
  mobileOpen: boolean
  children: React.ReactNode
  handleDrawerToggle: () => void
}

export function ResponsiveDrawer({ mobileOpen, children, handleDrawerToggle }: Props) {
  return (
    <>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        anchor="right"
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        {children}
      </Drawer>
      <Drawer
        variant="permanent"
        anchor="right"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
        open
      >
        {children}
      </Drawer>
    </>
  )
}
