import React,{ CSSProperties} from 'react'
import {Html, Body, Container, Tailwind, Text, Link, Preview } from '@react-email/components'

const WelcomeTemplate = ({name}: {name: string}) => {
  return (
    <html>
        <Preview>Welcome aboard</Preview>
        <Tailwind>
          <Body className="bg-white">
              <Container>
                  <Text className="font-bold text-3xl">Hello {name}</Text>
                  <Link href="https://www.cnn.com/">https://www.cnn.com/</Link>
              </Container>
          </Body>
        </Tailwind>
    </html>
  )
}

export default WelcomeTemplate
