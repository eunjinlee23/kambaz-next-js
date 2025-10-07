import { ReactNode } from "react";
import TOC from "./TOC";
import { Container } from "react-bootstrap";

export default function LabsLayout({
    children,
}: Readonly<{ children: ReactNode }>) {
    return (
        <Container>
            <div>
                <TOC />
            </div>
            <div>
                {children}
            </div>
        </Container>

);}