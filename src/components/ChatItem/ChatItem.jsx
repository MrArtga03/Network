import {  Box, Text, Stack } from "@chakra-ui/react"

import styles from './ChatItem.module.scss'

const ChatItem = ({ title, lastMessage, lastTime }) => {
  return (
    <Box 
      className={styles.container}
    >
      <Box className={styles['container-chat-data']}>
        <Text className={styles['title']}>
          {title}
        </Text>

        <Stack className={styles['chat-data']}>
          <Text className={styles['text']}>
            {lastMessage}
          </Text>
          <Text className={styles['time']}>
            {lastTime}                 
          </Text>
        </Stack>
      </Box>
    </Box>
  )
}

export default ChatItem