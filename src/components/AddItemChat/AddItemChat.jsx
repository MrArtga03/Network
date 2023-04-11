import { memo, useCallback, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { AddIcon } from "@chakra-ui/icons"
import { 
  Box,
  Heading,
  Input,
  ScaleFade,
  Stack,
  Text, 
  useDisclosure 
} from "@chakra-ui/react"

import FormButton from "../UI/FormButton/FormButton";
import { onAddChat } from "../../store/chatSlice";

import styles from './AddItemChat.module.scss'

const AddItemChat = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  
  const { isOpen, onToggle, onClose } = useDisclosure()
  
  const dispatch = useDispatch()
  const addChat = () => {
    if(!title) {
      return
    }
    
    dispatch(onAddChat({title, description}))
    setTitle('')
    setDescription('')
    reset()
    onClose()
  }

  const handleTitleChange = useCallback((event) => {
    setTitle(event.target.value)
  }, [])

  const handleDescriptionChange = useCallback((event) => {
    setDescription(event.target.value)
  }, [])

  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
    reset
  } = useForm({
    mode: 'onBlur'
  })

  const onSubmit = (data) => {
    console.log(JSON.stringify(data))
    reset()
  }

  return (
    <>
      <ScaleFade initialScale={0.9} in={isOpen}>
        <Stack position={'relative'}>
          <Box
            className={styles['container-form']}
            rounded='md'
            shadow='md'
          >
            <Heading className={styles.header}>
              Создать чат
            </Heading>

            <Box className={styles.body}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                  {...register('chatname', {
                    required: 'Поле опязательно к заполнению!',
                  })}
                  value={title}
                  onChange={handleTitleChange}
                  variant={"flushed"}
                  placeholder={"Название чата"}
                  color={"#fff"}
                  autoComplete="off"
                />

                <Text h={'20px'}>
                  {errors?.chatname && <p style={{color: 'red'}}>{errors?.chatname?.message || 'Вы должны написать название вашего чата!'}</p>}
                </Text>

                <Input
                  {...register('description')}
                  variant={"flushed"}
                  value={description}
                  onChange={handleDescriptionChange}
                  placeholder={"Описание (необязательно)"}
                  color={"#fff"}
                  autoComplete="off"
                />
              </form>
            </Box>

            <Box className={styles.footer}>
              <FormButton type={"submit"} onClick={addChat} colorScheme='blue' mr={3}>
                Создать
              </FormButton>
            </Box>
          </Box>
        </Stack>
      </ScaleFade>

      <FormButton 
        className={styles['button-add']}
        onClick={onToggle}
      >
        <AddIcon className={styles.icon}/>
      </FormButton>
    </>
  )
}

export default memo(AddItemChat)