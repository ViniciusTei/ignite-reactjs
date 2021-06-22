import { Box, Stack } from '@chakra-ui/react';
import React from 'react';
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export function Sidebar() {
    return (
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">
                <NavSection title="Geral">
                    <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
                    <NavLink icon={RiContactsLine}>Usuarios</NavLink>

                </NavSection>
                <NavSection title="Automacao">
                    <NavLink icon={RiInputMethodLine}>Formularios</NavLink>
                    <NavLink icon={RiGitMergeLine}>Automacao</NavLink>

                </NavSection>
            </Stack>
        </Box>
    )
}