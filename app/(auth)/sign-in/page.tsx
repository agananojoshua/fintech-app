import AuthFrom from '@/components/AuthForm'
import React from 'react'

const SignIn = async () => {
  return (
    <section className='flex-center size-full max-sm:px-6'>
      <AuthFrom  type="sign-in"/>
    </section>
  )
}

export default SignIn