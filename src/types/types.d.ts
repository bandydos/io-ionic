type IOBlock = {
    pin: number;
    status: boolean;
    command: string;
}

type AddBlock = (newPin: string, newStatus: boolean) => void;