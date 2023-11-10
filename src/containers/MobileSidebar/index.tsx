import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { IoCloseSharp } from 'react-icons/io5'
import { CloseSidebarIcon } from './styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#101418'
    }
  }
})

interface MobileSidebarProps {
  isOpen: boolean
  handleSidebarToggle: () => void
}

export default function MobileSidebar({
  isOpen,
  handleSidebarToggle
}: MobileSidebarProps) {
  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    handleSidebarToggle()
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <Drawer
          open={isOpen}
          onClose={() => handleSidebarToggle()}
          sx={{
            '& .MuiDrawer-paper': {
              backgroundColor: theme.palette.primary.main,
              width: '300px'
            }
          }}
        >
          <Box
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
          >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
              <IconButton onClick={() => handleSidebarToggle()}>
                <CloseSidebarIcon>
                  <IoCloseSharp />
                </CloseSidebarIcon>
              </IconButton>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </ThemeProvider>
  )
}
