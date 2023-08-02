import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { SearchBar } from './SearchBar'
import { drawerWidth } from '@/lib/helpers'
import MenuIcon from '@mui/icons-material/Menu'
import { FieldValues, UseFormRegister } from 'react-hook-form'

type Props = {
  handleSubmit: () => {}
  register: UseFormRegister<FieldValues>
  handleDrawerToggle: () => void
}

export function Navbar({ handleSubmit, register, handleDrawerToggle }: Props) {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        mr: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          ✏️ SO3 - Stats of Our Own
        </Typography>
        <form onSubmit={handleSubmit} className="flex flex-1 flex-row justify-end gap-1">
          <SearchBar register={register}></SearchBar>
        </form>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
