import React from "react";

import { ContainerItens as Container } from "./styles";

export default function ContainerItens({children, isBlur}) {

    return <Container isBlur={isBlur}>{children}</Container>
}