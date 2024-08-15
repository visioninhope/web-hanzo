"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation"
import { useAuth } from '@hanzo/auth/service'

import { useOrganization } from '@/context/organization-context'
import { getInvitation } from '@/utils/firebase-utils'

const UniversalPage = () => {
  const router = useRouter();
  const auth = useAuth()
  const searchParams = useSearchParams()

  const accetInvitation = async (token: string) => {
    try {
      const response = await getInvitation(token)
      if (response.success) {
        router.push("/dashboard")
      } else {
        console.log(response.error)
      }
    } catch {
      console.log('Error accepting invitation')
    }
  }


  useEffect(() => {
    const invitationToken = searchParams.get('token')
    invitationToken && accetInvitation(invitationToken)
    router.push("/dashboard")
  }, [])

  const initialize = async () => {
    fetch(`${process.env.NEXT_PUBLIC_LOGIN_SITE_URL}/api/auth/get-auth-token`, {
      method: 'GET',
      credentials: 'include',
    })
      .then(response => response.json())
      .then(async (data: any) => {
        const token = data.reqToken
        const invitationToken = searchParams.get('token')
        invitationToken && await accetInvitation(invitationToken)
        if (!!token) {
          await auth.loginWithCustomToken(token)

          if (auth.loggedIn) {
            router.push("/dashboard")
          }
          else {
            router.push('https://auth.hanzo.ai/?redirectUrl=https://dash.hanzo.ai')
          }
        } else {
          router.push('https://auth.hanzo.ai/?redirectUrl=https://dash.hanzo.ai')
        }
      })
  }
  
  // useEffect(() => {
  //   initialize()
  // }, [auth, searchParams, router])

}

export default UniversalPage
