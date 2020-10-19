import React from 'react'
import {withKnobs,boolean} from '@storybook/addon-knobs'
import Button from '../components/button'
import ThemeButton from '../components/theme-button'
import NavigationButton from '../components/navigation-button'
import Navigation from '../components/navigation'
import Home from '../components/icons/Home'
import TextTitle from '../components/text-title'
import Stack from '../components/stack'

export default {
  title: 'Buttons',
  decorators: [withKnobs]
}

export const Normal = () => <Button>Save</Button>
export const Theme = () => (
  <Stack column>
    {/* //full parantez açmazsak true olarak gider  */}
    <ThemeButton>Twit</ThemeButton>
    <ThemeButton full={true} big>Full</ThemeButton>
    <ThemeButton full big>Full Big</ThemeButton> 
  </Stack>
)
export const NavButton = () => (
  <NavigationButton>
    <Home />
    <TextTitle>Home</TextTitle>
  </NavigationButton>
)

export const Nav = () => {
const flat = boolean('Flat',false);
return <Navigation flat={flat} selectedKey="home" />}
