export interface IButton {
    onClick?: () => void;
    children: React.ReactNode; 
    type?: "button" | "submit" | "reset"; 
    disabled?: boolean; 
};