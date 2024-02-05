'use client'

import AddRoomModal from "@/components/custom/AddRoomModal";
import DeleteRoomModal from "@/components/custom/DeleteRoomModal";
import { useEffect, useState } from "react";

export function ModalProvider() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <AddRoomModal />
            <DeleteRoomModal />
        </>
    )

}