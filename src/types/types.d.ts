type IOBlock = {
    pin: number;
    status: boolean;
}

type AddBlock = (newPin: string, newStatus: boolean) => void;