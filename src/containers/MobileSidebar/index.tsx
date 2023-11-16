import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { IoCloseSharp } from 'react-icons/io5'
import { CloseSidebarIcon } from './styles'
import { Divider, List } from '@mui/material'
import FilterCard from '../../components/filterCard'

import * as enums from '../../utils/enums/Contact'

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
            <Divider sx={{ backgroundColor: 'GrayText' }} />
            <List sx={{ p: 0 }}>
              <FilterCard
                value={enums.Type.FAMILIA}
                critery="type"
                legend="Família"
              />
              <FilterCard
                value={enums.Type.AMIGOS}
                critery="type"
                legend="Amigos"
              />
              <FilterCard
                value={enums.Type.TRABALHO}
                critery="type"
                legend="Trabalho"
              />
              <FilterCard
                value={enums.Type.EMERGENCIA}
                critery="type"
                legend="Emergência"
              />
              <FilterCard
                value={enums.PhoneType.CELULAR}
                critery="phoneType"
                legend="Celular"
              />
              <FilterCard
                value={enums.PhoneType.FIXO}
                critery="phoneType"
                legend="Fixo"
              />
              <FilterCard
                value={enums.Status.ATIVO}
                critery="status"
                legend="Ativo(s)"
              />
              <FilterCard
                value={enums.Status.BLOQUEADO}
                critery="status"
                legend="Bloqueado(s)"
              />
              <FilterCard critery="all" legend="Todos" />
            </List>
          </Box>
        </Drawer>
      </Box>
    </ThemeProvider>
  )
}
