import React from 'react'
import { PageContainer, PageContainerToolbar } from '@toolpad/core/PageContainer'
import { auth } from '../../../auth'
import Login from './Login'

async function Page() {
    const session = await auth()
  return (
    <PageContainer>
        <Login/>
    </PageContainer>
  )
}

export default Page
