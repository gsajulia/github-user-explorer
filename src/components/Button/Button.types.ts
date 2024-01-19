export interface IButton {
    onClick?: () => void;
    children: React.ReactNode; 
    type?: "button" | "submit" | "reset"; 
    className?: string;
    disabled?: boolean; 
};