import { Link } from 'react-router-dom'
import { Card, CardBody, CardHeader, Heading, Stack } from '@chakra-ui/react'

import { homeUrl } from '../../constants/urls'
import styles from './Layout.module.scss'
import ChatList from '../ChatList/ChatList'

const Layout = ({ children }) => {
  return (
    <>
      <main className={styles['main-container']}>
        <Stack className={styles['wrapper']}>
          <Card>
            <CardHeader className={styles['header-container']}>
              <Heading className={styles['header']}>
                <Link to={homeUrl} className={styles['nav-link']}>
                  Мессенджер
                </Link>
              </Heading>
            </CardHeader>

            <CardBody className={styles['body-container']}>
              <ChatList />
            </CardBody>
          </Card>
        </Stack>
        {children}
      </main>
    </>
  )
}

export default Layout
