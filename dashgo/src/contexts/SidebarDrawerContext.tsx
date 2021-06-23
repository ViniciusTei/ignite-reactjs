import { useDisclosure, UseDisclosureProps } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useContext, createContext, ReactNode} from 'react';

interface SidebarDrawerProvider {
    children: ReactNode
}

type SidebarDrawerContext = UseDisclosureProps

const SidebarDrawerContext = createContext({} as SidebarDrawerContext)

export function SidebarDrawerProvider({ children }: SidebarDrawerProvider) {
    const disclosure = useDisclosure()
    const router = useRouter()

    useEffect(() => {
        disclosure.onClose()
    }, [router.asPath])
    
    return (
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => {
    return useContext(SidebarDrawerContext)
}