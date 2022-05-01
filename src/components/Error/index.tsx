import { StyledError } from "./ErrorContainer.Styles";

interface ErrorProps {
    children: React.ReactNode;
}

const Error = ({children}:ErrorProps) => {
    return (
        <StyledError>
            {children}
        </StyledError>
    )
}

export default Error;