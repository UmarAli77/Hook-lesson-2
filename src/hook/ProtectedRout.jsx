import React from 'react'
import { useAuth } from './useAuth';

function ProtectedRout({ Component }) {
    useAuth();
    return <Component />
}

export default ProtectedRout
