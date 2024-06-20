import React from 'react'

const Layout = () => {
  return (
        <Stack>
          <Stack.Screen
            name="index"
            options={{ headerShown: true }}
          />
          {/* <Stack.Screen
            name="home/index"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="home/image"
            options={{
              headerShown: false,
              presentation: 'transparentModal',
              animation: 'fade'
            }}
          /> */}
        </Stack>
  )
}

export default Layout