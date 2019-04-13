import styled from 'styled-components';

function px2rem(pxValue) {
    const rem = 37.5;
    return `${pxValue / rem}rem`;
}

const ScrollViewWrapper = styled.div`
	padding-bottom: ${px2rem(55)};
`;

export default ScrollViewWrapper;
