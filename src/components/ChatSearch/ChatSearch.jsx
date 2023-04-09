import { Box, IconButton, Menu, MenuButton, MenuList, Stack } from "@chakra-ui/react"
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";

import FormInput from "../UI/FormInput/FormInput";
import CustomLink from "../CustomLink/CustomLink";

import styles from './ChatSearch.module.scss'

const ChatSearch = ({ handleSubmit }) => {
  return (
    <>
      <Stack className={styles['container-search']}>
        <Menu>
          <MenuButton 
            className={styles['menu-button']}
            as={IconButton}
            icon={<HamburgerIcon />}
          />
          <MenuList className={styles['menu-list']}>
            <Stack className={styles['menu-items']} spacing={"2"}>
              <CustomLink to='/account' className={styles['menu-item']}>
                Профиль
              </CustomLink> 

              <CustomLink to="/organizations" className={styles['menu-item']}>
                Организации
              </CustomLink>
          
              <CustomLink to='/setting' className={styles['menu-item']}>
                Настройки
              </CustomLink>
            </Stack>
          </MenuList>
        </Menu>
        <Box className={styles.search}>
          <form className={styles['search-form']} onSubmit={handleSubmit}>
            <FormInput 
              className={styles['input-search']}
              variant='outline'
              type='search'
              name='search'
              placeholder='Поиск...'
              autoComplete="off"
            />
            <IconButton 
              className={styles.icon}
              type='submit'
              aria-label='Search database' 
              icon={<SearchIcon />}
            />
          </form>
        </Box>
      </Stack>
    </>
  )
}

export default ChatSearch