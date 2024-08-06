'use client'

import { useState, useEffect } from 'react'
import type { Dispatch, SetStateAction } from 'react'
import { Input, Button, Dialog, DialogContent, DialogTitle, DialogFooter } from '@hanzo/ui/primitives'
import { useAuth } from '@hanzo/auth/service'
import { useOrganization } from '@/context/organization-context'
import { sendEmail } from '@/utils/email'

import { addOrganization, inviteTeamMember } from '@/utils/firebase-utils'
import SendInvitationEmailComponent from './invitation-component'
import { PlusCircle } from 'lucide-react'

type ModealProps = {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}

export default function CreateTeamDialog({ ...props }: ModealProps) {
    const [userName, setUserName] = useState('MusorDMT')
    const [userEmail, setUserEmail] = useState('musordmt@proton.me')
    const [walletAddress, setWalletAddress] = useState('0x82b23c88ad897f786dff234')

    const [organization, setOrganization] = useState<string>('')
    const [invitationDatas, setInvitationDatas] = useState<{ email: string, role: 'member' | 'owner' }[]>([{ email: '', role: 'member' }])
    const [isInvitation, setIsInvitation] = useState<boolean>(false)
    const [canInvitation, setCanInvatation] = useState<boolean>(false)
    
    const auth = useAuth()
    const org = useOrganization()
    
    useEffect(() => {
        if (!auth) return
        
        if (auth.user?.displayName)
            setUserName(auth.user.displayName)
        if (auth.user?.email)
            setUserEmail(auth.user.email)
        if (auth.user?.walletAddress)
            setWalletAddress(auth.user.walletAddress)
    }, [auth])

    const setInvitationData = (index: number, email: string, role: 'member' | 'owner') => {
        const newInvitationDatas = [...invitationDatas]
        newInvitationDatas[index] = { email, role }
        setInvitationDatas(newInvitationDatas)
    }

    const handleCreate = async () => {
        const res = await addOrganization(organization, userEmail)
        
        if (res.success && res.id) {
            const currentOrganizations = org.organization || []
            org.setOrganization([...currentOrganizations, {
                id: res.id,
                name: organization,
                owner: userEmail,
                role: 'owner'
            }])
            console.log('Organization created successfully')
            setIsInvitation(true)
        }

        else console.error('Error creating organization')
    }

    const handleInvite = async () => {
        // props.setOpen(false)
        invitationDatas.map(async (invitationData) => {
            if (invitationData.email !== '') {
                const res = await inviteTeamMember(organization, invitationData.email, invitationData.role)
                if (res.success && res.token) {
                    console.log('Email is saved in the database')
                    sendEmail(invitationData.email, res.token)
                }
                else console.error('Email save failed')
            }
        })
    }

    useEffect(() => {
        if (props.open == false) {
            setOrganization('')
            setInvitationDatas([{ email: '', role: 'member' }])
            setIsInvitation(false)
            setCanInvatation(false)
        }
    }, [props.open])

    useEffect(() => {
        invitationDatas.map((invitationData) => {
            if (invitationData.email !== '') {
                setCanInvatation(true)
            }
        })
    }, [invitationDatas])

    return (
        <Dialog open={props.open} onOpenChange={props.setOpen}>
            <DialogContent className="p-0 gap-0 transform overflow-hidden rounded-lg border border-level-3 bg-background sm:max-w-[600px]">
                <DialogTitle className="text-xl lg:text-2xl bg-background border-b border-level-3 p-4 gap-4 overflow-hidden">
                    {isInvitation ? 'Add Team Members' : 'Create Organization'}
                </DialogTitle>
                {isInvitation ?
                    <div className="p-4 flex flex-col gap-4">
                        <p>Add Team Members (Optional)</p>
                        {invitationDatas.map((data, index) => (
                            <SendInvitationEmailComponent key={index} index={index} email={data.email} role={data.role} setInvitationData={setInvitationData} />
                        ))}
                        <div className='max-w-[120px] w-full rounded-md border border-level-3 flex flex-row gap-2 p-2 hover:cursor-pointer' onClick={() => setInvitationDatas([...invitationDatas, { email: '', role: 'member' }])}>
                            <PlusCircle size={20} /><p className='text-sm font-normal'>Add more</p>
                        </div>
                    </div>
                    :
                    <div className="p-4 w-full flex flex-col gap-2">
                        <p className='text-sm font-light text-muted-2'>Organization Name</p>
                        <Input type="text" value={organization} onChange={(e) => {e.stopPropagation, setOrganization(e.target.value)}} placeholder="Organization Name" required />
                    </div>
                }
                <DialogFooter className='p-4 flex flex-row sm:justify-between'>
                    <Button variant="outline" onClick={() => props.setOpen(false)}>Cancel</Button>
                    {isInvitation ?
                        canInvitation ?
                            <Button variant="primary" onClick={handleInvite}>Invite</Button>
                            :
                            <Button variant="primary" onClick={() => props.setOpen(false)}>Skip</Button>
                        :
                        <Button variant="primary" onClick={handleCreate}>Create</Button>
                    }
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}